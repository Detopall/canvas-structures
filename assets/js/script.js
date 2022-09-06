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
	showSunshine();
}

function showSunshine(){ //could've done more, but RAM depleted
	const canvas = document.querySelector("#sunshine");
	const ctx = canvas.getContext('2d');

	for (let i = 0; i < canvas.width; i += WIDTH) {
		const cell = new Cell(i, canvas.height, 0, 0);
		cell.draw(ctx, "orange");

		for (let j = 0; j < canvas.width; j += WIDTH) {
			const cell = new Cell(canvas.height, j, 0, 0);
			cell.draw(ctx, "red");

			for (let k = 0; k < canvas.width; k += WIDTH) {
				const cell = new Cell(canvas.height, 0, k, canvas.height);
				cell.draw(ctx, "green");

				for (let l = 0; l < canvas.width; l += WIDTH) {
					const cell = new Cell(canvas.height, l, 0, canvas.height);
					cell.draw(ctx, "blue");
				}
			}
		}
	}
}

function showCube(){
	const canvas = document.querySelector("#cube");
	const ctx = canvas.getContext('2d');

	const a = new Cell(40, 80, 40, 180);
	a.draw(ctx, "orange");
	const b = new Cell(40, 180, 140, 180);
	b.draw(ctx, "orange");
	const c = new Cell(140, 180, 140, 80);
	c.draw(ctx, "orange");
	const d = new Cell(40, 80, 140, 80);
	d.draw(ctx, "orange");

	const e = new Cell(40, 80, 80, 60);
	e.draw(ctx, "red");
	const f = new Cell(80, 60, 170, 60);
	f.draw(ctx, "red");
	const g = new Cell(140, 80, 170, 60);
	g.draw(ctx, "red");
	const h = new Cell(140, 180, 170, 160);
	h.draw(ctx, "red");
	const i = new Cell(170, 60, 170, 160);
	i.draw(ctx, "red");

	ctx.setLineDash([8, 5]); //set the next lines to dashed lines
	const j = new Cell(40, 180, 80, 160);
	j.draw(ctx, "blue");
	const k = new Cell(80, 160, 170, 160);
	k.draw(ctx, "blue");
	const l = new Cell(80, 160, 80, 60);
	l.draw(ctx, "blue");
}

function showSpiral(){
	const canvas = document.querySelector("#spiral");
	const ctx = canvas.getContext('2d');
	for (let i = 0; i < canvas.width; i+=WIDTH) {
		const cell = new Cell(i, 0, canvas.height, i);
		cell.draw(ctx, "blue");

		for (let j = 0; j < canvas.width; j+=WIDTH) {
			const cell = new Cell(0, j, j, canvas.height);
			cell.draw(ctx, "red");
		}
	}
}

function showVortex(){
	const canvas = document.querySelector("#vortex");
	const ctx = canvas.getContext('2d');
	for (let i = 0; i < canvas.width; i+=WIDTH) {
		for (let j = 0; j < canvas.width; j+=WIDTH) {
			const cell = new Cell(canvas.height-WIDTH/2, i+WIDTH/2, WIDTH/2, j+WIDTH/2);
			cell.draw(ctx, "yellow");
		}
	}
}

function showGrid(){
	const canvas = document.querySelector("#grid");
	const ctx = canvas.getContext('2d');
	for (let i = 0; i < canvas.width; i+=WIDTH) {
		const cell = new Cell(i, canvas.width, i, 0);
		cell.draw(ctx, "white");
		for (let j = 0; j < canvas.width; j+=WIDTH) {
			const cell = new Cell(0, j, canvas.height, j);
			cell.draw(ctx, "red");
		}
	}
}

class Cell {
	constructor(XStart, YStart, XEnd, YEnd) {
		this.XStart = XStart;
		this.XEnd = XEnd;
		this.YStart = YStart;
		this.YEnd = YEnd;
		this.draw = function (ctx, color="black") {
			ctx.beginPath();
			ctx.strokeStyle = color;
			ctx.moveTo(XStart, YStart);
			ctx.lineTo(XEnd, YEnd);
			ctx.stroke();
		}
	}
}