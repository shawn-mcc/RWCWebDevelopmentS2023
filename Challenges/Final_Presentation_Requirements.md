# Requirements for Final Presentation
## RWC Web Dev Spring 2023
Hello Students! It was a pleasure to be your coach this semester, I really hope you all learned what you intended to about Web Development and leave here with the skills to build your own site and unleash your creativity on the world. 

In preperation for your Final Presentaion, I've put together this checklist to help you make sure everything on your site is working and ready to be presented. 

1. General
    - [ ] All pages must be organized within a bootstrap grid. How you decide to lay out the grid is up to you
    - [ ] All pages must by styled using CSS and follow a general non-clashing color theme using a custom color palette defined on the :root pseudoclass
        - This means that there generally shouldn't be any colors on your page that aren't defined in your palette. The only real exception to this should be any colored elements of your game.
        - Non-clashing means that the colors you choose to use in your palette should not contrast each other so much that it draws attention away from the content on the page.
        - There are plenty of color palettes availible online if you struggle to have an eye for good colors (I know I don't)
    - [ ] All pages must have enough content to not be considered "bare". You may acomplish this via a mix of written text and different media types
        - Careful layout of your grid can help a page appear fuller with less content
    - [ ] All pages must feature a navigation bar to traverse from page to page
        - Add an additional button to your navbar that redirects back to the entire S2023RWC index page (https://rwc-webdev-s2023.000webhostapp.com/)
    - [ ] Site is accurate
        - Make sure your site has accurate information, and proofread the content of each page to make sure it all makes sense.
        - Nothing distracts people more than a typo! make sure you're running each paragraph through spellcheck!
    - [ ] Make sure site works on live server
        - Make sure your code is uploaded to GitHub and you ask me to push the changes to the server.
        - Once I do, check out the live site and make sure everything still works and looks okay.
        - This is because your final presentation will be based off of the live website, you will not be able to load local files from your computer
        - Additionally, your my_classmates page will not work locally anyway.
2. Home Page
    - [ ] Must be named "index.html"
    - [ ] Contains general information about you and a brief introduction
    - [ ] *Optional* Images or a "Quick Facts" Section
        - This is just an idea to help you make your intro page look fuller without repeating what you talk about on other pages.
        - Regardless of if you choose to use it or not, the page must still not look "bare"
3. My Family Page
    - [ ] Must be named "my_family.html"
    - [ ] Discuss your family members, culture, heritage, or anything else you'd like.
        - This page is fairly loose in its requirements, so feel free to have fun with it as long as the page doesn't look bare.
4. My Hobbies Page
    - [ ] Must be named "my_hobbies.html"
    - [ ] Discuss any particular hobbies or interests you have
    - [ ] Must include an Explanation or a "how-to" section for your hobby of choice
5. My Favorites Page
    - [ ] Must be named "my_favorites.html"
    - [ ] Utilize appropiate media types to describe your favorites of the following:
        - Color (Any Color Attribute)
        - Food (Text & Image)
        - Subject in School (Your Choice)
        - Song (Audio)
        - Movie Scene (Video)
        - Quote (Text (styled))
        - Superhero/Villan **OR** Actor/Actress (Text, Image, & Anchor to either IMDB or wiki page)
    - [ ] Page is still easy to navigate and media does not interfere with user
        - Basically things like, music shouldn't autoplay, video's need to have control buttons, stuff like that. The page should still flow nicely and not look crammed together.
6. My Classmates Page
    - Part A: Building your object
        - [ ] Your object *must* be defined in a file called about_me.js that lives inside of the js folder of your project.
            - If your object is not located in the right place, your classmates will be unable to find your file to pull your info in
        - [ ] Create a const object named after yourself with the following properties:
            - name
            - age
            - school
            - grade
            - favorite_subject
            - about_me
            - image_url
                - Remember that if you're using google drive, you have to get a sharable link, and put that link into a source grabber like [this one](https://sites.google.com/site/gdocs2direct/) and use that link as the url
            - home_page_url
                - *Needs to be link to your live site, not local, so for example, mine is "http://rwc-webdev-s2023.000webhostapp.com/Mr.%20Shawn/Project/index.html". You can replace the part with my name with yours instead.*
    - Part B: Building the Table
        - [ ] Must be named "my_classmates.html"
        - [ ] Table is contained within standard site layout/grid
        - [ ] Page calls the files of every other student objects
            - Remember that ../ allows you to go up a directory so you can navigate to where your classmates files are without having them on your system
        - [ ] Page contains an empty table that is populated dynamically with Javascript
        - [ ] Dynamic table is filled in with information from each classmate's object
            - Raw information is populated, but url's must be parsed in properly, you don't want to just display the url of an image or another page.
        - [ ] Include Ms. Mou and I in your classmates as well. Our projects follow the same naming convention as yours.
7. Look What I Made Page
    - [ ] Must be named "look_what_i_made.html"
    - [ ] Game must be contained within standard site layout / grid.
    - [ ] Game must be playable to users who visit the site
    - [ ] Refer to individual project's requirements for more details
    - [ ] Game contains one additional mod of your choice beyond the outlined requirements

        
