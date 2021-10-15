<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS -->
    <!-- Cargar css de otras páginas siempre desde el index -->
    <link rel="stylesheet" href="main/stylesheet/main.css">
    <link rel="stylesheet" href="contact/stylesheet/contact-main.css">
    <link rel="stylesheet" href="landing-page/stylesheet/landing.css">
    <!-- CSS -->
    <!-- SCRIPT -->
    <Script type="module" defer src="main/scripts/xhr.js"></Script>
    <script type="text/javascript" src="main/scripts/main.js"></script>
    <!-- SCRIPT -->
    <!-- FONTS -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300&display=swap" rel="stylesheet">  
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"> 
    <!-- FONTS -->
    <title>Ecommerce vargas&vegas</title>
    <script type="module">loadLandingPage()</script>
</head>
<body onload="notifyProgress()"> 
    <div class="container">
        <div class="header">
            <div class="header-buttons-wrapper">
                <button type="button" class="header-buttons" id="home-button">Home</button>
                <button type="button" class="header-buttons" id="category-button">Categorias</button>
                <button type="button" class="header-buttons" id="contact-button" onclick="setUrl()">Contacto</button>
                <button type="button" class="header-buttons" id="service-button">Servicios</button>
                <button type="button" class="header-buttons" id="our-work-button">Nuestro trabajo</button>
                <button type="button" class="header-buttons" id="estimate-button">Crear presupuesto</button>
                </div>
            <div id="company-logo-wrapper">
                <img src="main/images/vv-logo.png" id="header-company-logo">
                </div>
            </div>
        <div class="category-wrapper" id="231">
            <div class="drop-down-categories">
                <nav class="all-categories" id="1">
                    <li>BBQ-Parillas </li>
                    <li>Cuartos fríos</li>
                    <li>Carritos</li>
                    <li>Congelación</li>
                    <li>Cámaras</li>
                    <li>Congeladores</li>
                    <li>Calor</li>
                    </nav>
                <nav class="all-categories" id="2">
                    <li>Cocinas</li>
                    <li>Extración</li>
                    <li>Estantes</li>
                    <li>Freidores</li>
                    <li>Fregaderos</li>
                    <li>Urnas secas</li>
                    <li>Hornos</li>
                    </nav>
                <nav class="all-categories" id="3">
                    <li>Lavamanos</li>
                    <li>Mesas frías</li>
                    <li>Planchas</li>
                    <li>Refrigeración</li>
                    <li>Urnas de calor</li>
                    <li>Baño María</li>
                    <li>Urnas frías</li>
                    </nav>
                </div>
            </div>

        <div class="contact-wrapper"></div>
        <div class="body-wrapper"></div>
        <div class="footer">
            <legend class="middle-landing-title" id="footer-meaningless-message">I'm the footer and i'm under construction!</legend>
            </div>
        </div>
</body>
</html>