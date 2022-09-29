import express from "express";

// Shortcut for response.status().send()
express.response.reply = function (code: number, message: any) {
  this.status(code).send(message);
};
