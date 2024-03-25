<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Admin\CreateUserRequest;
use App\Http\Requests\Admin\UpdateUserRequest;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    /**
     * __________________________________________________________________________________
     * index()
     * Display a listing of the resource.
     * __________________________________________________________________________________
     */
    public function index()
    {
        $users = User::with('roles', 'media')->get();

        // Her kullanıcının profil resminin URL'sini alın ve kullanıcı nesnesine ekleyin
        foreach ($users as $user) {
            $profilePictureUrl = $user->getFirstMediaUrl('profile_photo');
            $user->profile_photo_url = $profilePictureUrl;
        }
    
        return response()->json($users);
    }

    /**
    * __________________________________________________________________________________
    * store()
    * Store
    * __________________________________________________________________________________
    */
    public function store(CreateUserRequest $request)
    {

        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        $data = [
            'text' => 'Kullanıcı başarıyla eklendi.',
            'type' => 'success',
            'id' => $user->id,
        ];
        return response()->json($data);
    }

    /**
     * __________________________________________________________________________________
     * update()
     * Update
     * __________________________________________________________________________________
     */

     public function update(UpdateUserRequest $request)
     {
 
         $user = User::find($request->id);
         $user->name = $request->name;
         $user->email = $request->email;
         $user->password = Hash::make($request->password);
         $user->save();
         $data = [
             'text' => 'Kullanıcı başarıyla güncellendi.',
             'type' => 'success',
             'id' => $user->id,
         ];
         return response()->json($data);
     }



    /**
     * __________________________________________________________________________________
     * Edit
     * __________________________________________________________________________________
     */
    public function edit($id)
    {
        $data = User::find($id);
        $profilePictureUrl = $data->getFirstMediaUrl('profile_photo');
        $data->profile_photo_url = $profilePictureUrl;
        return response()->json($data);
    }

    /**
     * __________________________________________________________________________________
     * user_roles()
     * __________________________________________________________________________________
     */
     

     public function user_roles(Request $request)
     {
        //return $request->all();
         // Kullanıcının sahip olduğu rolleri alın
         $userRoles = User::find($request->id)->roles->pluck('id')->all();
         // Tüm rolleri alın
         $roles = Role::all();
         // Rolleri işleyerek istediğiniz formatı oluşturun
         $roels_list = $roles->map(function ($role) use ($userRoles) {
             return [
                 'id' => $role->id,
                 'name' => $role->name,
                 'description' => $role->description,
                 'selected' => in_array($role->id, $userRoles),
             ];
         });
         $data = [
             'roels_list' => $roels_list->values(),
         ];
 
         return response()->json($data);
     }
    /**
     * __________________________________________________________________________________
     * login_as()
     * __________________________________________________________________________________
     */
     public function login_as(Request $request)
     {

        if(session()->has('impersonated_by')){
            Auth::user()->leaveImpersonation();
        }


        $user =  User::find($request->id);
        Auth::user()->impersonate($user);
        $user->impersonated_by = session()->get('impersonated_by');

        $user =new UserResource($user);

       // $manager =  Auth::user()->isImpersonating();
       // $user->impersonate($user);
        
       
        $data = [
            'text' => 'Kullanıcı başarıyla güncellendi.',
            'type' => 'success',
            'user' => $user,
        ];
        return response()->json($data);
     }
    /**
     * __________________________________________________________________________________
     * login_as()
     * __________________________________________________________________________________
     */
     public function leave_user(Request $request)
     {

        Auth::user()->leaveImpersonation();
        
        $user = Auth::user();
        $user->impersonated_by = session()->get('impersonated_by');

        $user =new UserResource($user);



       
        $data = [
            'text' => 'Kullanıcıdan ayrıldınız!.',
            'type' => 'success',
            'user' => $user,
        ];
        return response()->json($data);
     }
   

}
