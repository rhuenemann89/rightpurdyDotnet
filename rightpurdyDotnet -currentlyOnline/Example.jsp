<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">

        <!-- If IE use the latest rendering engine -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <!-- Set the page to the width of the device and set the zoom level -->
        <meta name="viewport" content="width = device-width, initial-scale = 1">


        <title>Right Purdy Animation</title>

        <link rel="stylesheet" type="text/css" href="css/bootstrap.css">

        <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Josefin+Sans" rel="stylesheet">


    </head>
    <body>

        <style>
            .youtube{
                padding-left: 40px;
                padding-right: 40px;

                background-color: black;
            }

        </style>

        <!--header-->
        <%@ include file="includes/header.jsp" %>

        <!--menu-->
        <%@ include file="includes/menu.jsp" %>



        <!-- Container element -->


        <div class="panel-body">

            <div class="col-md-12">



                <div id="myCarousel" class="carousel slide" >
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                        <li data-target="#myCarousel" data-slide-to="3"></li>
                    </ol>

                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">

                            <div class="youtube">
                                <div class="embed-responsive embed-responsive-16by9 ">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/E-7yD2RQ2aA" frameborder="0" allowfullscreen></iframe>

                                </div>

                            </div>
                        </div>

                        <div class="item">

                            <div class="youtube">
                                <div class="embed-responsive embed-responsive-16by9 ">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/E-7yD2RQ2aA" frameborder="0" allowfullscreen></iframe>

                                </div>

                            </div>
                        </div>

                        <div class="item">

                            <div class="youtube">
                                <div class="embed-responsive embed-responsive-16by9 ">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/E-7yD2RQ2aA" frameborder="0" allowfullscreen></iframe>

                                </div>

                            </div>
                        </div>

                        <div class="item">

                            <div class="youtube">
                                <div class="embed-responsive embed-responsive-16by9 ">
                                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/E-7yD2RQ2aA" frameborder="0" allowfullscreen></iframe>

                                </div>

                            </div>
                        </div>
                    </div>

                    <!-- Left and right controls -->
                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>



            </div>

            
        </div>



        <%@ include file="includes/footer.jsp" %>



        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script src="js/bootstrap.js"></script>
    </body>
</html>