"use client";
import { useEffect, useRef, useState } from "react";


// Minimal canvas shell — plug your existing MiniHeads logic into update() & draw().
export default function MiniHeadsPage(){
const canvasRef = useRef<HTMLCanvasElement | null>(null);
const [running, setRunning] = useState(true);


useEffect(() => {
const canvas = canvasRef.current!;
const ctx = canvas.getContext("2d")!;
let raf = 0;


// Game state (example placeholders)
const state = {
t: 0,
p1: { x: 120, y: 260, vx: 0, vy: 0 },
p2: { x: 380, y: 260, vx: 0, vy: 0 },
ball: { x: 250, y: 150, vx: 2, vy: -2, r: 10 },
keys: new Set<string>(),
score: { p1: 0, p2: 0 }
};


const W = (canvas.width = 800);
const H = (canvas.height = 400);


function inputListeners(on: boolean){
const handleDown = (e: KeyboardEvent) => state.keys.add(e.key.toLowerCase());
const handleUp = (e: KeyboardEvent) => state.keys.delete(e.key.toLowerCase());
if(on){
window.addEventListener("keydown", handleDown);
window.addEventListener("keyup", handleUp);
} else {
window.removeEventListener("keydown", handleDown);
window.removeEventListener("keyup", handleUp);
};
}

// enable input listeners
inputListeners(true);

// simple update/draw placeholders
function update(dt: number){
  state.t += dt;
  state.ball.x += state.ball.vx;
  state.ball.y += state.ball.vy;

  // bounce on walls
  if(state.ball.x - state.ball.r < 0 || state.ball.x + state.ball.r > W) state.ball.vx *= -1;
  if(state.ball.y - state.ball.r < 0 || state.ball.y + state.ball.r > H) state.ball.vy *= -1;
}

function draw(){
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, W, H);

  // draw ball
  ctx.fillStyle = "cyan";
  ctx.beginPath();
  ctx.arc(state.ball.x, state.ball.y, state.ball.r, 0, Math.PI * 2);
  ctx.fill();
}

let last = performance.now();
function step(now: number){
  const dt = (now - last) / 1000;
  last = now;

  if(running){
  update(dt);
  draw();
  }

  raf = requestAnimationFrame(step);
}

raf = requestAnimationFrame(step);

// cleanup on unmount / deps change
return () => {
  inputListeners(false);
  cancelAnimationFrame(raf);
};
}, []); // end useEffect

// render canvas
return (
  <canvas ref={canvasRef} />
);
}