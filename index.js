const HomePage = (
    function() {
        const title = 'Beary Breakfast bar';
        const description = 'Beary\'s has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.';
        const location = '123 Forest Drive, Forestville, Maine';
        return { 
            title,
            description, 
            location,
        };
    }
)();

const Menu = (
    function() {
        const beverages = ['foo', 'bar', 'baz'];
        const sides = ['foo', 'bar'];
        return {
            beverages,
            sides,
        }
    }
)();

const Contact = (
    function() {
        const phone = '9933992220';
        const email = 'foobar@gmail.com';
        return {
            phone,
            email,
        }
    }
)();

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    updateElements(tabName);
};

function updateElements(tabName) {
    switch (tabName) {
        case 'Home':
            updateHomePage();
            break;
        case 'Menu':
            updateMenu();
            break;
        case 'Contact':
            updateContact();
            break;
    }   
}

function updateHomePage() {
    document.getElementById('title').innerText = HomePage.title;
    document.getElementById('description').innerText = HomePage.description;
    document.getElementById('location').innerText = HomePage.location;
}

function updateMenu() {
    let ul = document.getElementById('beverages');
    for (let beverage of Menu.beverages) {
        let li = document.createElement('li');
        li.innerText = beverage;
        ul.appendChild(li);
    }

    ul = document.getElementById('sides');
    for (let side of Menu.sides) {
        let li = document.createElement('li');
        li.innerText = side;
        ul.appendChild(li);
    }
}

function updateContact() {
    document.getElementById('phone').innerText = Contact.phone;
    document.getElementById('email').innerText = Contact.email;
}
