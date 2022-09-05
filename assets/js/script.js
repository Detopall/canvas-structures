"use strict";

document.addEventListener("DOMContentLoaded", init);

let COLS, ROWS;
let canvas, ctx;
let WIDTH = 20;

function init(){
	showGrid();
	showVortex();
	showSpiral();
	showCube();
}

function showCube(){
	const canvas = document.querySelector("#cube");
	const ctx = canvas.getContext('2d');

	const a = new Cell(40, 80, 40, 180);
	a.draw(ctx);
	const b = new Cell(40, 180, 140, 180);
	b.draw(ctx);
	const c = new Cell(140, 180, 140, 80);
	c.draw(ctx);
	const d = new Cell(40, 80, 140, 80);
	d.draw(ctx);

	const e = new Cell(40, 80, 80, 60);
	e.draw(ctx);
	const f = new Cell(80, 60, 170, 60);
	f.draw(ctx);
	const g = new Cell(140, 80, 170, 60);
	g.draw(ctx);
	const h = new Cell(140, 180, 170, 160);
	h.draw(ctx);
	const i = new Cell(170, 60, 170, 160);
	i.draw(ctx);

	ctx.setLineDash([8, 5]); //set the next lines to dashed lines
	const j = new Cell(40, 180, 80, 160);
	j.draw(ctx);
	const k = new Cell(80, 160, 170, 160);
	k.draw(ctx);
	const l = new Cell(80, 160, 80, 60);
	l.draw(ctx);
}

function showSpiral(){
	const canvas = document.querySelector("#spiral");
	const ctx = canvas.getContext('2d');
	for (let i = 0; i < canvas.width; i+=WIDTH) {
		const cell = new Cell(i, 0, canvas.height, i);
		cell.draw(ctx);

		for (let j = 0; j < canvas.width; j+=WIDTH) {
			const cell = new Cell(0, j, j, canvas.height);
			cell.draw(ctx);
		}
	}
}

function showVortex(){
	const canvas = document.querySelector("#vortex");
	const ctx = canvas.getContext('2d');
	for (let i = 0; i < canvas.width; i+=WIDTH) {
		for (let j = 0; j < canvas.width; j+=WIDTH) {
			const cell = new Cell(canvas.height-WIDTH/2, i+WIDTH/2, WIDTH/2, j+WIDTH/2);
			cell.draw(ctx);
		}
	}
}

function showGrid(){
	const canvas = document.querySelector("#grid");
	const ctx = canvas.getContext('2d');
	for (let i = 0; i < canvas.width; i+=WIDTH) {
		const cell = new Cell(i, canvas.width, i, 0);
		cell.draw(ctx);
		for (let j = 0; j < canvas.width; j+=WIDTH) {
			const cell = new Cell(0, j, canvas.height, j);
			cell.draw(ctx);
		}
	}
}

class Cell {
	constructor(XStart, YStart, XEnd, YEnd) {
		this.XStart = XStart;
		this.XEnd = XEnd;
		this.YStart = YStart;
		this.YEnd = YEnd;
		this.draw = function (ctx) {
			ctx.beginPath();
			ctx.moveTo(XStart, YStart);
			ctx.lineTo(XEnd, YEnd);
			ctx.stroke();
		}
	}
}