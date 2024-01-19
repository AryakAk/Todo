console.log('script is working');
const btn = document.getElementById('add-user');
const newbtntext = btn.innerText;
const text = document.getElementById('textbox');
const showrecords = document.getElementById('records');
const popups = document.getElementById('popup');
let userarr = [];
let objstr = localStorage.getItem('users');
console.log(objstr);
let editid = null;
if (objstr != null) {
    userarr = JSON.parse(objstr);
}
dis();
function add() {
    const a = text.value;
    if (text.value != '') {
        if (editid != null) {
            //  edit
            userarr.splice(editid, 1, { 'name': a });
            editid = null;
        } else {
            // insert
            alert(a);
            console.log('user take value');
            userarr.push({ 'name': a })
            console.log(userarr);
        }
        // const text = document.getElementById('textname');
        save(userarr);
        dis();
        text.value = '';
        btn.innerText = newbtntext;
    }
    else {
        // alert('Enter value');
        popup();
    }
}
function save(arr) {
    let str = JSON.stringify(userarr);
    localStorage.setItem('users', str);
}

function dis() {
    let statement = '';
    userarr.forEach((user, i) => {
        console.log(user);
        // let lst = document.createElement('tr');
        // let b = showrecords.append(lst);
        statement += `<tr><th scope="row" id="theadth">${i + 1}</th>
        <td>${user.name}</td>
        <td>
        <i class="fa-solid fa-user-pen" id="pen" onclick="edit(${i})">
        </i> <i class="fa-regular fa-trash-can" id="delete" onclick="del(${i})"></i>
        </td>
        </tr>`;
        console.log(statement);
    });
    showrecords.innerHTML = statement;
}
function edit(id) {
    console.log(id + 1);
    editid = id;
    text.value = userarr[editid].name;
    btn.innerText = 'Update';


}

function del(id) {
    console.log(id + 1);
    userarr.splice(id, 1);
    save();
    dis();
}
function popup() {
    let pop = '';
    pop = `<div id="popup1" class="overlay">
	<div class="popup">
		<h2>Enter ⬆😅⬆ Something..</h2>
		<a id="close" onclick="cls();">&times;</a>
		<div class="content">
			Because 👀Don't Waste Your Time To Read, Please Enter Your Details, Thank You.
		</div>
	</div>
</div>`;
    console.log(pop);
    popups.innerHTML = pop;
    text.value = "Here";
}
function cls() {
    const element = document.getElementById("popup");
    element.remove();
    text.value = "";
}