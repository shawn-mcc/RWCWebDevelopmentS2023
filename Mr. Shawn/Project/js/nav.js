function doNav(){
    
    var nav = `
    <div class="collapse navbar-collapse" id="navbarSupportedContent"> <!-- Start of Navbar content-->
        <ul class="navbar-nav mr-auto"> <!-- Start of Navbar List-->
            <li class="nav-item">
                
                <a class="nav-link" href="index.html">Home</a> <!-- href = # means it will stay on the same page -->
            </li>
            <li class="nav-item">
                <a class="nav-link" href="my_family.html">My Family</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="my_hobbies.html">My Hobbies</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="my_classmates.html">My Classmates</a>
            </li>
        </ul> <!-- End of Navbar List-->
    </div> <!-- End of Navbar content-->
`;
    document.getElementById("navbar-space").innerHTML = nav;
}