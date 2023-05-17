<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Document</title>
</head>
<body>
    <c:forEach var="i" begin="15" end="15">
        <center><font size="${i}">구구단</font> </center><br>
    </c:forEach>
<script type="text/javascript" src="../js/multiplicaion.js"></script>
</body>
</html>