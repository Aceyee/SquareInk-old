<!DOCTYPE html>
<head>
    <meta charset="UTF-8">
    <title>Square Ink</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="stylesheet" href="/lib/css/bootstrap.css">
    <script src="/lib/js/jquery-3.2.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="/lib/js/bootstrap.js"></script>
    <link rel="stylesheet" href="/css/index.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark center">
        <a class="navbar-brand" href="#">
            <img src="/image/logo.png" class="d-inline-block align-top logo" alt="">
            Square Ink
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active btn btn-nav">
                    <a class="nav-link" href="/">HOME<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active btn btn-nav">
                    <a class="nav-link" href="/project.php">PROJECT<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active btn btn-nav">
                    <a class="nav-link" href="#">MESSAGE<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active btn btn-nav">
                    <a class="nav-link" href="#">ABOUT<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active btn btn-nav" data-toggle="modal" data-target="#exampleModal">
                    <a class="nav-link" href="#">LANGUAGE</a>
                </li>
            </ul>
        </div>
    </nav>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Select a Languages</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <button type="button" class="btn btn-primary" onclick="document.location.href = '/en/index.php'">English</button>
                    <button type="button" class="btn btn-primary" onclick="document.location.href = '/zh/index.php'">Simplified Chinese (¼òÌåÖÐÎÄ)</button>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselIndicators" data-slide-to="1"></li>
            <li data-target="#carouselIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src="/image/first.svg" alt="First slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/image/second.svg" alt="Second slide">
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="/image/third.svg" alt="Third slide">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</body>