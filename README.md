# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  Failure to properly handle errors within asynchronous operations can lead to application crashes or unexpected behavior. The `bug.js` file showcases the problematic code, while `bugSolution.js` provides the corrected version with robust error handling.

## Problem

The issue lies in the lack of comprehensive error handling within the asynchronous `doSomethingAsync()` function.  If this function throws an error, the Express.js application will not gracefully handle it, potentially leading to a crash or silent failure.

## Solution

The solution involves implementing proper error handling using `.catch()` to intercept any rejected promises and provide a graceful response to the client or appropriate logging.  The improved code also demonstrates best practices for responding with proper HTTP status codes when an error occurs.