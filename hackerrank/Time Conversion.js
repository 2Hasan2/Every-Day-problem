#!/usr/bin/env ts-node
"use strict";
function timeConversion(s) {
    const [h, m, sec, mer] = s.split(/:|(?<=\d)(?=[AP]M)/);
    const newH = (mer === "AM" && h === "12") ? "00" : (mer === "PM" && h !== "12") ? String(Number(h) + 12) : h;
    return `${newH}:${m}:${sec}`;
}
console.log(timeConversion("07:05:45PM"));
