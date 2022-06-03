async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}

let cubes = [{

        "headlineImg": "image/web1.jpg",
        "name": "web_architects",
        "description": "Let`s 🚀 Join our telegram channel for free certification courses and webinars and other updates(link in bio or search on telegram!",
        "images": "image/1.jpg",
        "location": "New York City, N.Y.",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 299,
        "comments": []
    },
    {
        "headlineImg": "image/icon1.jpg",
        "name": "rich_web_developer",
        "description": "Which windows you have used? I used Windows XP, 7, 8 and 10. And you?🧠💻💡",
        "images": "image/2.jpg",
        "location": "San Francisco, C.A.",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 169,
        "comments": []
    },
    {
        "headlineImg": "image/icon2.jpg",
        "name": "baby_wolf_codes",
        "description": "Some interesting websites and tools to help with your web design 😁",
        "images": "image/3.jpg",
        "location": "Frankfurt am Main, Germany",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 99,
        "comments": []
    }, {
        "headlineImg": "image/icon3.jpg",
        "name": "developer_academy",
        "description": "Margin VS Padding : What's The Difference ?...",
        "images": "image/4.jpg",
        "location": "München, Germany",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 127,
        "comments": []
    }, {
        "headlineImg": "image/icon4.jpg",
        "name": "web_designer_remote",
        "description": "Developers Environments Setup Rate Setup 1-10 Comments belowTag Share Comments below your thoughts 💚 ",
        "images": "image/5.jpg",
        "location": "Milano, Italy",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 325,
        "comments": []
    },

    {
        "headlineImg": "image/icon5.jpg",
        "name": "python_coders",
        "description": "Important Libraries of Python 📝.. Save it ✅",
        "images": "image/6.jpg",
        "location": "Köln, Germany",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 953,
        "comments": []
    }, {
        "headlineImg": "image/icon6.jpg",
        "name": "design_academy",
        "description": "CSS Pseudo Elements A quick guide Post by@frontendcharm",
        "images": "image/7.jpg",
        "location": "Berlin, Germany",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 396,
        "comments": []
    }, {
        "headlineImg": "image/icon7.jpg",
        "name": "developers_worldwide",
        "description": "How To Cancel A Set Timeout.....Post by @deeecode",
        "images": "image/8.jpg",
        "location": "Las Vegas, N.V.",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 295,
        "comments": []
    }, {
        "headlineImg": "image/icon11.jpg",
        "name": "ux_designer",
        "description": "Day 5 of @codingduckling challenge 😄 If you find this content useful, tap the ♥️ icon, share, and consider giving me a follow. Thanks!",
        "images": "image/9.jpg",
        "location": "Aschaffenburg, Germany",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 432,
        "comments": []
    }, {
        "headlineImg": "image/icon9.jpg",
        "name": "webdesign_classics",
        "description": "Here's this week's bunch of quizzies! How many did you get right? If you have any questions shoot them down in the comments! 💬",
        "images": "image/10.jpg",
        "location": "London, U.K.",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 641,
        "comments": []
    }, {
        "headlineImg": "image/icon10.jpg",
        "name": "best_web_designs",
        "description": "Rate Setup 1-10🔥👨‍💻 Credit: @edc.mania Tag, Share Comments below your thoughts 💚 ",
        "images": "image/11.jpg",
        "location": "Dublin, IRL",
        "commentIcon": "image/emptyheart.png",
        "commentIcon2": "image/emptycomment.png",
        "commentIcon3": "image/paper-plane.png",
        "likes": 345,
        "comments": []
    },


];




function render() {
    let cube = document.getElementById('photoCube');
    cube.innerHTML = '';

    for (let i = 0; i < cubes.length; i++) {
        const element = cubes[i];
        cube.innerHTML += `
        <div class="photoCube">
            <div class="headline"><h4><img src="${element['headlineImg']}">${element['name']}</h4></div>
            <div class="location"><span class="local">${element['location']}</span></div>
            <div class="image"><img src="${element['images']}"></div>
            <div class="commentIcon"><img onclick="changeHeart(${i})" id="heart${i}"src="${element['commentIcon']}">&nbsp<img src="${element['commentIcon2']}">&nbsp<img src="${element['commentIcon3']}"></div>
            <div class="liken" id="like${i}">${element['likes']}&nbspLikes</div>
            <div class="description"><h5>${element['name']}</h5>${element['description']}</div>
            <div id="comments${i}"></div> 
            <div class="postField">
            <input placeholder="Comment..." class="inputfield" id="input${i}"><span class="post" onclick="addComment(${i})">Posten</span>
            </div>
            <div id="commentField" class="comments"></div>
            
           
        </div>
        `;

    }

}


function addComment(i) {
    let input = document.getElementById('input' + i);
    cubes[i]['comments'].push(input.value);
    render();
    input.value = '';

    renderComments(i);
}

function renderComments(i) {
    let comment = document.getElementById('comments' + i);
    let post = cubes[i];
    comment.innerHTML = '';

    for (let i = 0; i < post['comments'].length; i++) {

        comment.innerHTML += `
        <div class="postComment">
        <b>just_pat_ffm</b>&nbsp${post.comments[i]}
        </div>

         `;

    }
}

function changeHeart(i) {
    let image = document.getElementById("heart" + i);
    if (image.src.match("redheart.png")) {
        image.src = "image/emptyheart.png";
        cubes[i].likes--;
        document.getElementById('like' + i).innerHTML = cubes[i].likes + '&nbsp' + 'Likes';

    } else {
        image.src = "image/redheart.png";
        cubes[i].likes++;
        document.getElementById('like' + i).innerHTML = cubes[i].likes + '&nbsp' + 'Likes';
    }

}

/*function changeHeart(i) {
    let picture = document.getElementById("heart" + i).src = cubes[i]['commentIcon'];
    if (picture === cubes[i]['commentIcon']) {
        document.getElementById("heart" + i).src = cubes[i]['commentIcon4'];
    } else {
        document.getElementById("heart" + i).src = cubes[i]['commentIcon'];
    }

}*/