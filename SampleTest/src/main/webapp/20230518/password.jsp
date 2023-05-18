<%@ page language="java" contentType="text/html; charset = UTF-8"
         pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<%
    int pass1 = Integer.parseInt(request.getParameter("password"));
    int pass2 = Integer.parseInt(request.getParameter("password-confirm"));

    int password = pass1 + pass2;
%>
<%=password%>
</body>
</html>