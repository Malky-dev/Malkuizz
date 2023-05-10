"use strict";

const { createHash } = require('node:crypto')

function encryptSHA256(params) {
  return createHash('sha256').update(params).digest('hex')
}

function getCurrentSQLDateTime () {
  const date = new Date()
  return formatDate(date)
}

function getSQLDateTimePlusThirtyDays () {
  const date = new Date()
  const datePlusThirty = new Date().setDate(date.getDate() + 30) 
  return formatDate(datePlusThirty)
}

function formatDate (date) {
  return String(date.getFullYear()).padStart(4, "0") + "-" +
    String(date.getMonth() + 1).padStart(2, "0") + "-" +
    String(date.getDate()).padStart(2, "0") + " " +
    String(date.getHours()).padStart(2, "0") + ":" +
    String(date.getMinutes()).padStart(2, "0") + ":" +
    String(date.getSeconds()).padStart(2, "0");
}

module.exports = { encryptSHA256, getCurrentSQLDateTime, getSQLDateTimePlusThirtyDays, formatDate }