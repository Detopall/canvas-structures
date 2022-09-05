"use strict";

document.addEventListener("DOMContentLoaded", init);

let COLS, ROWS;
let canvas, ctx;
let WIDTH = 20;

function init(){
	showGrid();
	showVortex();
}

function showVortex(){
	const canvas = document.querySelector("#vortex");
	const ctx = canvas.getContext('2d');
	for (let i = 0; i < canvas.width; i+=WIDTH) {
		for (let j = 0; j < canvas.width; j+=WIDTH) {
			const cell = new Cell(canvas.height, i+WIDTH/2, 0, j+WIDTH/2);
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