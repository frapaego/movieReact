<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html dir="LTR" style="height: 100%">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="_csrf" content="${_csrf.token}" />
<meta name="_csrf_header" content="${_csrf.headerName}" />
<title>Movie REACT JS</title>

<link rel="stylesheet"
	href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css"
	crossorigin="anonymous" />
<link rel="stylesheet"
	href="https://fonts.googleapis.com/icon?family=Material+Icons"
	crossorigin="anonymous" />
<link rel="stylesheet" href="static/css/Login.css" />

<script
	src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.0/jquery.min.js"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
	crossorigin="anonymous"></script>
<script
	src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.25.0/babel.min.js"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/react/16.5.0/umd/react.development.js"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.5.0/umd/react-dom.development.js"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/react-popper/1.0.1/index.umd.min.js"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/react-transition-group/2.4.0/react-transition-group.min.js"
	crossorigin="anonymous"></script>
<script
	src="https://unpkg.com/@material-ui/core@3.3.2/umd/material-ui.development.js"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.min.js"
	crossorigin="anonymous"></script>

<script src="static/js/login.jsx" type="text/babel"></script>

</head>

<body style="height: 100%">

	<div id="login" class="login">
		<div id="login-app-bar"></div>

		<br />

		<c:if test="${param.error != null}">
			<div class="alert alert-danger">
				<c:out value="${spring_security_last_exception.message}" />
			</div>
		</c:if>

		<br />

		<form id="loginForm" name="f" action="login" method="post">
			<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
                        
			<div id="login-form-content"></div>
		</form>

	</div>


</body>

</html>