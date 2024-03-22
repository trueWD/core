<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
	<meta charset="utf-8">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>YES | yemresoft</title>

	<!-- Global stylesheets -->
	<link href="{{ url('global_assets/fonts/inter/inter.css') }}" rel="stylesheet" type="text/css">
	<link href="{{ url('global_assets/icons/phosphor/styles.min.css')}}" rel="stylesheet" type="text/css">
	<link href="{{ url('assets/css/ltr/all.min.css')}}" id="stylesheet" rel="stylesheet" type="text/css">
	<!-- /global stylesheets -->

	<!-- Core JS files -->
	<script src="{{ url('global_assets/demo/demo_configurator.js')}}"></script>
	<script src="{{ url('global_assets/js/bootstrap/bootstrap.bundle.min.js')}}"></script>
	<!-- /core JS files -->

	<!-- Theme JS files -->
	<script src="{{ url('global_assets/js/vendor/visualization/d3/d3.min.js')}}"></script>
	<script src="{{ url('global_assets/js/vendor/visualization/d3/d3_tooltip.js')}}"></script>

	<script src="{{ url('assets/js/app.js')}}"></script>

	@vite('resources/css/app.css')

    <style>
        .table-sm {
            --table-cell-padding-y: 0.625rem !important;
            --table-cell-padding-x: 1rem !important;
        }
    </style>
</head>
<body id="app">
	@vite('resources/js/app.js')
</body>
</html>
