// gameLib.js
const canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 400;
canvas.tabIndex = 1;
canvas.style.outline = "none";
document.body.appendChild(canvas);
canvas.focus();
canvas.addEventListener("click", () => canvas.focus());

const ctx = canvas.getContext("2d");
const keys = {};
document.addEventListener("keydown", e => { keys[e.key] = true; });
document.addEventListener("keyup", e => { keys[e.key] = false; });

const objects = [];

// cria objeto
function createObject(id, x, y, w, h, color="black", sprite=null, frames=1) {
  const obj = { 
    id, x, y, w, h, color, sprite, img:null, frame:0, frames, vars:{}, onClick:null 
  };
  if (sprite) {
    obj.img = new Image();
    obj.img.src = sprite;
  }
  objects.push(obj);
  return obj;
}

// remover
function removeObject(id) {
  const index = objects.findIndex(o => o.id === id);
  if (index !== -1) objects.splice(index, 1);
}

// pegar
function getObject(id) {
  return objects.find(o => o.id === id) || null;
}

// desenhar
function drawObjects() {
  for (let o of objects) {
    if (o.img) {
      ctx.drawImage(o.img, o.x, o.y, o.w, o.h);
    } else {
      ctx.fillStyle = o.color;
      ctx.fillRect(o.x, o.y, o.w, o.h);
    }
  }
}

// limpar
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// colisão
function isColliding(a, b) {
  if (!a || !b) return false;
  if (!objects.includes(a) || !objects.includes(b)) return false;
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}

// texto
function text(msg, x, y, color="black", size=20) {
  ctx.fillStyle = color;
  ctx.font = `${size}px Arial`;
  ctx.fillText(msg, x, y);
}

// definir variável
function setVar(obj, key, value) {
  if(obj) obj.vars[key] = value;
}

// pegar variável
function getVar(obj, key) {
  return obj && obj.vars[key] !== undefined ? obj.vars[key] : null;
}

// definir função de clique
function setOnClick(obj, fn) {
  if(obj) obj.onClick = fn;
}

// detectar clique nos objetos
canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  for (let o of objects) {
    if (mx >= o.x && mx <= o.x + o.w && my >= o.y && my <= o.y + o.h) {
      if (o.onClick) o.onClick(o);
    }
  }
});
