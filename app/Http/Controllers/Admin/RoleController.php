<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;
use App\Http\Requests\Admin\CreateRoleRequest;
use App\Http\Resources\RoleResource;

class RoleController extends Controller
{
    /**
     * __________________________________________________________________________________
     * index()
     * Display a listing of the resource.
     * __________________________________________________________________________________
     */
    public function index()
    {
        $data  = Role::all();

       return response()->json($data);
    }

     /**
     * __________________________________________________________________________________
     * store()
     * Store
     * __________________________________________________________________________________
     */

    public function store(CreateRoleRequest $request)
    {
        Role::create([
            'name' => $request->name,
            'guard_name' => 'web',
            'description' => $request->description
        ]);
        $data = [
            'text' => 'Rol başarıyla eklendi.',
            'type' => 'success',
        ];
        return response()->json($data);
    }

     /**
     * __________________________________________________________________________________
     * edit()
     * __________________________________________________________________________________
     */

    public function edit($id)
    {
        $role = Role::with('permissions')->find($id);
        return response()->json($role);
    }


     /**
     * __________________________________________________________________________________
     * update()
     * __________________________________________________________________________________
     */
    public function update(Request $request, $id)
    {
        $role = Role::find($id);
        $role->syncPermissions($request->permissions);
        $role->name = $request->name;
        $role->save();
        return response()->json($role);
    }


    /**
     * __________________________________________________________________________________
     * show()
     * __________________________________________________________________________________
     */

    public function show(Request $request)
    {
        $role = Role::where('id', $request->id)->first();

        // Tüm izinleri alın
        $permissions = Permission::all();

        // Rolün sahip olduğu izinleri alın
        $role_permissions = $role->permissions->pluck('name', 'id')->all();

        // İzinleri parent_id'ye göre gruplayın ve description alanlarını ekleyin
        $groupedPermissions = $permissions->groupBy('parent_id');

        // Ana kategorileri oluşturun
        $parentPermissions = $groupedPermissions[0] ?? collect();

        // Ana kategorilerin altındaki izinleri işleyerek istediğiniz formatı oluşturun
        $response = $parentPermissions->map(function ($parentPermission) use ($groupedPermissions, $role_permissions) {
        $children = $groupedPermissions[$parentPermission->id] ?? collect();

            return [
                'id' => $parentPermission->id,
                'name' => $parentPermission->name,
                'description' => $parentPermission->description,
                'selected' => in_array($parentPermission->id, array_keys($role_permissions)),
                'children' => $children->map(function ($childPermission) use ($role_permissions) {
                    return [
                        'id' => $childPermission->id,
                        'name' => $childPermission->name,
                        'description' => $childPermission->description,
                        'selected' => in_array($childPermission->id, array_keys($role_permissions)),
                    ];
                })->values(),
            ];
        });
        
        $data = [
            'role' => $role,
            'permissions' => $response->values(),
        ];

        return response()->json($data);
    }

     /**
     * __________________________________________________________________________________
     * updatePermissionStatus()
     * __________________________________________________________________________________
     */
    public function updatePermissionStatus(Request $request)
    {
        $role = Role::findOrFail($request->role_id);
        $permission = Permission::findOrFail($request->permission_id);

        if ($role->hasPermissionTo($permission)) {
            $role->revokePermissionTo($permission);
            $permission->removeRole($role);
        } else {
            $role->givePermissionTo($permission);
        }  
        $data = [
            'text' => 'İzin başarıyla güncellendi.',
            'type' => 'success',
        ];
        return response()->json($data);

    }

    /**
     * __________________________________________________________________________________
     * users()
     * __________________________________________________________________________________
     */
    public function users(Request $request)
    {
        
        $users = User::role($request->name)->get();
    
        $data = [];
    
        foreach ($users as $user) {
            $profilePicture = $user->getFirstMedia('profile_photo');
            $userData = [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'profile_photo_url' => $profilePicture ? $profilePicture->getUrl() : null,
            ];
    
            $data[] = $userData;
        }
    
        return response()->json($data);
    }
    /**
     * __________________________________________________________________________________
     * remove_user()
     * __________________________________________________________________________________
     */
    
    public function add_or_remove(Request $request)
    {


        $user = User::find($request->user_id);

        // Eğer kullanıcı belirtilen rolüne sahipse kaldır
        if ($user->hasRole($request->role_name)) {
            $user->removeRole($request->role_name);
            $message = 'Kullanıcı rolden silindi.';
            $type = 'success';
        } else {
            // Eğer kullanıcı belirtilen rolüne sahip değilse, rolü kullanıcıya ver
            $role = Role::where('name', $request->role_name)->first();
            if ($role) {
                $user->assignRole($role);
                $message = 'Kullanıcıya rol verildi.';
                $type = 'success';
            } else {
                $message = 'Belirtilen rol bulunamadı.';
                $type = 'error';
            }
        }
    
        $data = [
            'text' => $message,
            'type' => $type,
        ];
  
        return response()->json($data);
    }
    /**
     * __________________________________________________________________________________
     * destory()
     * __________________________________________________________________________________
     */
    
    public function destroy(Request $request)
    {

        
        
        $role = Role::find($request->id);

        if($role->name == 'root'){
            $data = [
                'text' => 'Root rolündeki kullanıcı silinemez.',
                'type' => 'error',
            ];
            return response()->json($data);
        }

        if($role){
            $role->permissions()->detach(); // Rol ile bağlantılı tüm izinleri siler
            $role->delete(); // Rolü siler
        }

        $data = [
            'text' => 'Rol ve role bağlı tüm izinler silindi.',
            'type' => 'success',
        ];
        return response()->json($data);
    }




}

