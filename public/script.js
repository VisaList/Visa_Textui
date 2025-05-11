const Visa = {};
const wait = a => new Promise(b => setTimeout(b, a));
const addActive = a => a.classList.add('active');
const removeActive = a => a.classList.remove('active');
const hasActive = a => a.classList.contains('active');

window.addEventListener('message', e => (e.data.type && Visa[e.data.type]) && Visa[e.data.type](e.data));

const sound = new Audio("./sounds/open.ogg");
sound.volume = 0.3;
const container = document.getElementById("container");
const content = document.getElementById("content");
let timeout = null;

Visa.open = async ({action, msg, color}) => {
    if (timeout) clearTimeout(timeout);
    if (action) {
        color = color || "#3580bd";
        const formattedMsg = msg.replace(/\[(.*?)\]/g, '<span style="background-color:' + color + ';">$1</span>');
        content.innerHTML = formattedMsg;
        if (!hasActive(container)) {
            sound.play();
        }
        addActive(container);
        timeout = setTimeout(() => {
            addActive(content);
            timeout = null;
        }, 10);
    } else {
        removeActive(content);
        timeout = setTimeout(() => {
            removeActive(container);
            content.textContent = "";
            timeout = null;
        }, 150);
    }
}

// setTimeout(() => {
//     Visa.open({
//         action: true,
//         msg: "กด [Back Space] เพื่อเปิดหน้าต่าง",
//         color: "#3580bd"
//     })
// }, 500);