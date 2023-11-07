const deletpassword= (website) => {
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))

}



const showPassword = () => {
 let tb = document.querySelector("table")

    let data = localStorage.getItem("passwords")
    if (data == null) {
        tb.innerHTML = "no data to show "
    }
    else {
        tb.innerHTML = `<tr>
 <th>Website</th>
 <th>Username</th>
 <th>Password</th>
 <th>Delete</th>
</tr>`
    let arr = JSON.parse(data);
        let str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];


            str += `<tr>
    <td>${element.website}</td>
    <td>${element.username}</td>
    <td>${element.password}</td>
    <td>${"delete"}</td>
 </tr>`
        }
        tb.innerHTML = tb.innerHTML + str
    }
}

showPassword()
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Add a function to trigger the animation when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    const aboutContent = document.querySelector('.about-content');

    // Add the 'active' class to trigger the animation
    aboutContent.classList.add('active');
});

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("clicked")
    console.log(username.value, password.value)

    let passwords = localStorage.getItem("passwords")
    console.log(passwords)
    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("password saved")
        localStorage.setItem("passwords", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("password saved")
        localStorage.setItem("passwords", JSON.stringify(json))

    }
    showPassword()

})
