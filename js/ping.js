const blk_pitn = { //鍚勫皬鏂瑰潡鐩稿銆愯嚜韬腑蹇冦€戠殑浣嶇疆 -- 銆愯嚜韬腑蹇冦€戠‘瀹氫负#div22鐨勬柟鍧�
    block1: [[0, 1], [0, 0], [-1, 0], [-1, -1]],
    block2: [[0, 1], [0, 0], [-1, 0], [0, -1]],
    block3: [[-1, 1], [0, 0], [-1, 0], [-1, -1]],
    block4: [[0, 1], [0, 0], [-1, 0], [-1, -1]], /* 1 */
    block5: [[-1, 1], [0, 0], [-1, 0], [0, -1]],
    block6: [[0, -1], [0, 0], [-1, 0], [1, -1]],
    block7: [[-1, -1], [0, 0], [-1, 0], [1, 0]],
    block8: [[-1, 1], [0, 0], [-1, 0], [-1, -1]], /* 3 */
    block9: [[0, -1], [0, 0], [-1, 0], [1, 0]],
    block10: [[-1, 1], [0, 0], [-1, 0], [1, 0]],
    block11: [[2, 0], [0, 0], [-1, 0], [1, 0]], /* 鈥� */
    block12: [[0, 1], [0, 0], [-1, 0], [0, -1]], /* 2 */
    block13: [[0, 1], [0, 0], [-1, 0], [-1, -1]], /* 1 */
    block14: [[1, 1], [0, 0], [-1, 0], [1, 0]],
    block15: [[1, -1], [0, 0], [-1, 0], [1, 0]],
    block16: [[-1, -1], [0, 0], [-1, 0], [1, 0]], /* 7 */
    block17: [[0, 1], [0, 0], [-1, 0], [0, -1]], /* 2 */
    block18: [[0, 1], [0, 0], [-1, 0], [-1, -1]], /* 1 */
    block19: [[0, -1], [0, 0], [-1, 0], [1, 0]], /* 9 */
    block20: [[1, -1], [0, 0], [-1, 0], [1, 0]],
    block21: [[0, 1], [0, 0], [-1, 0], [-1, -1]], /* 1 */
    block22: [[1, 1], [0, 0], [-1, 0], [1, 0]], /* 14 */
    block23: [[0, 2], [0, 0], [0, -1], [0, 1]]      /* | */
},
offset_pitn = { //鍚勬柟鍧梑lock鐩稿銆愮埍蹇冧腑蹇冦€戠殑浣嶇疆
    block1: [5, 3],
    block2: [5, 1],
    block3: [3, 4],
    block4: [3, 2],
    block5: [3, -1],
    block6: [2, 5],
    block7: [2, 1],
    block8: [1, -1],
    block9: [1, -3],
    block10: [1, 2],
    block11: [0, 3],
    block12: [0, 0], /* 銆愮埍蹇冧腑蹇冦€�*/
    block13: [-1, -4],
    block14: [0, -2],
    block15: [-2, 4],
    block16: [-2, 2],
    block17: [-2, 0],
    block18: [-3, -2],
    block19: [-4, 0],
    block20: [-3, 5],
    block21: [-5, 3],
    block22: [-4, 1],
    block23: [-6, 1]    /* 鍥犲姩鐢婚渶瑕佺Щ鍔ㄤ竴涓柟鍧楋紝鏁厃杞村潗鏍�-1*/
};

let blocks = document.getElementsByClassName("block"),
block = blocks[0],
love = document.getElementsByClassName("love")[0],
timer = null,
index = 0,  //璁板綍鎷兼帴鐖卞績鐨勫姩鐢绘楠�
clone_block;    //鐢ㄤ簬鍏嬮殕鏂瑰潡

//1.绉诲姩鏂瑰潡鐨勩€愯嚜韬腑蹇冦€戝埌銆愮埍蹇冧腑蹇冦€�
block.style.top = "50%";
block.style.left = "50%";
block.style.margin = "-20px 0 0 -20px";

const block_left = parseFloat(window.getComputedStyle(block, null).left.slice(0, -2)), //銆愮埍蹇冧腑蹇冦€� 宸﹁竟璺濈鐖跺厓绱犵殑璺濈
block_top = parseFloat(window.getComputedStyle(block, null).top.slice(0, -2));  //銆愮埍蹇冧腑蹇冦€� 椤堕儴璺濈鐖跺厓绱犵殑璺濈

function Next() {
if (++index >= 24) {
    clearInterval(timer);

    Rise();
    // alert("宸茬粡鏄渶鍚庝竴涓簡锛�");
    return;
}

block.style.visibility = "visible"; //鍗囩┖鍔ㄧ敾鍓嶅厑璁稿彲瑙�

//2.绉诲姩鏂瑰潡鍒版寚瀹氱殑浣嶇疆-鍗虫槸绉诲姩銆愯嚜韬腑蹇冦€戝埌鐩爣浣嶇疆
block.style.left = block_left + 40 * offset_pitn["block" + index][0] + "px";
block.style.top = block_top - 40 * offset_pitn["block" + index][1] + "px";
for (let i = 0; i < block.children.length; i++) {
    // block.children[1].innerText = index;    //缂栧彿渚夸簬璋冭瘯
    block.children[i].style.left = blk_pitn["block" + index][i][0] * -40 + "px";
    /* -40 鏄洜涓洪€昏緫鍧愭爣鍜屾祻瑙堝櫒鐨剎锛寉杞存柟鍚戜笉涓€鏍�*/
    block.children[i].style.top = blk_pitn["block" + index][i][1] * -40 + "px";
}

//3.鍏嬮殕鏂瑰潡鈥斾繚瀛樼幇鍦ㄧ殑浣嶇疆
/* 涓€鍏变細鍏嬮殕23涓柟鍧楋紝鍔犱笂鍘熷厛鐨勪竴涓柟鍧梑lock锛屽叡24涓柟鍧楋紝鍗冲鍑哄師鍏堢殑block鏂瑰潡*/
clone_block = block.cloneNode(true);
love.appendChild(clone_block);

if (love.children.length >= 24) {
    blocks[blocks.length - 1].children[2].style.display = "none"; //鍘绘帀澶氫綑鐨勫皬鏂瑰潡
    block.style.display = "none";   //闅愯棌澶氬嚭鐨刡lock鏂瑰潡
}
}

function Rise() {
//4.鐖卞績鍗囬珮锛屽鍑虹殑閭ｄ釜灏忔柟鍧楀紑濮嬫帀钀�
console.log("寮€濮嬪崌绌�");
let timer2 = null,
    distance = 0;
/* 鍗囬珮鏃讹紝绉诲姩鐨勮窛绂�*/
const target = 120, /* 鐩爣璺濈*/
    speed = 1;
/*绉诲姩閫熷害*/

let love_top = parseFloat(window.getComputedStyle(love, null).top.slice(0, -2));  //鐖卞績鐩掑瓙璺濈灞忓箷椤堕儴鐨勮窛绂�


timer2 = setInterval(() => {
    distance += speed;
    // console.log(distance);
    if (distance >= target) {
        clearInterval(timer2);

        console.log("鍗囩┖瀹屾瘯");

    }

    love.style.top = (love_top - distance) + "px";

}, 22);

}

window.onload = function () {
setTimeout(() => {

    timer = setInterval(() => {
        Next();
    }, 300);


}, 12000);   //gif鍥炬挱鏀惧畬姣曟墍闇€鏃堕棿涓�11.73s
};