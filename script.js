var value = 
    '<a href="https://soundfry.com/{:permalink}" target="_blank"><div class="sfb sfb-outline-primary"><i class="soundfry"></i> Follow</div></a><script async src="https://dl.dropboxusercontent.com/s/a64gkohkd5nmcmu/app.js" charset="utf-8"></script>';
var input = document.getElementById('username');
input.oninput = function (e) {
  const textarea = document.getElementById('embed-url');
  console.log(textarea.value);
  textarea.value = value.replace('{:permalink}', encodeURIComponent(e.target.value));
}
var copy = document.getElementById('copy');
copy.onclick = () => {
   var _ = new ClipboardJS('#copy', {
      text: function bob(trigger) {
       return trigger.previousElementSibling.value;
    }});
}
