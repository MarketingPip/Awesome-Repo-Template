import { diffChars, diffLines, diffWords } from "https://esm.sh/diff";

import stringWidth from 'https://esm.sh/string-width';

import Color from 'https://esm.sh/color';
import chalk from 'https://esm.sh/chalk';

 chalk.level = 3

 import {
  printf,
} from 'https://esm.sh/fast-printf';
import {fileTypeFromBlob} from 'https://esm.sh/file-type'; 
import {Buffer} from "https://esm.sh/buffer"
 
import {sprintf, vsprintf} from "https://esm.sh/sprintf-js"
import KioskBoard from "https://esm.sh/kioskboard";
 
// var inspect = require('object-inspect');
//import Keyboard from 'https://esm.sh/simple-keyboard';

import { runNpmCli } from "https://esm.sh/npm-in-browser";


import {Termino} from 'https://cdn.jsdelivr.net/gh/MarketingPipeline/Termino.js@latest/dist/termino.min.js'

// import escapeStringRegexp from 'https://esm.sh/escape-string-regexp';

//import isRegex from 'https://esm.sh/is-regex';

import escape from "https://esm.sh/escape-html";

import {decode, encode} from "https://esm.sh/html-entities"; 
 
import path from "https://esm.sh/path-browserify";

import normalize from "https://esm.sh/normalize-path"  // https://www.npmjs.com/package/is-relative

import unixify from "https://esm.sh/unixify"
import os from "https://esm.sh/os-browserify";

 import { AnsiUp } from "https://esm.sh/ansi_up"

//import isValidFileName from "https://esm.sh/als-filename-validator"

import hasAnsi from "https://esm.sh/has-ansi";

import { split } from "https://esm.sh/shellwords";

import { convert } from "https://esm.sh/unix-permissions"


import stdout from "https://esm.sh/browser-stdout"

import JSCPP from "https://esm.sh/JSCPP"
 
import  url from  "https://esm.sh/@cordiverse/url";

import mimetype from "https://esm.sh/mime-types"

import Cryptr from "https://esm.sh/cryptr"

const __filename = url.fileURLToPath("https://esm.sh/path-browserify");
const __dirname = path.dirname(__filename);

//console.log(__dirname)

import isValidFilename from 'https://esm.sh/valid-filename';

import sanitizeFilename from "https://esm.sh/sanitize-filename";

// var request = require('browser-request')

let piping = false // used if command is being piped

//console.log(os.networkInterfaces())
 
  //import ace from "https://esm.sh/ace-builds@1.35.4/src-noconflict/ace.js";

//import "https://esm.sh/ace-builds@1.35.4/src-noconflict/ext-modelist.js"

//import "https://esm.sh/ace-builds@1.35.4/src-noconflict/ext-themelist.js"
 
    //    const editor = ace.edit('editor');
 
function stringToBlob(str){
 
const blob = new Blob([str]);
  return blob
}
//console.log(stringToBlob("hello"))

/* 
TODO Checklist:
- [ ] Clean a ton of a junk coe.
- [ ] Seperate VFS and Shell Completely. (Both will be libraries)
- [ ] Define / find a true spec to follow. (I am not a FS expert nor linux lol)
- [ ] Cookie based storage
- [ ] Options to use / reload storage.
- [ ] Possible mount options? (This should ideally be mininimal tho...) 
- [ ] Address wildcard issues with VFS. Example : rm file* should deletes all files that start with "file". but only deletes first match.
  - [ ] parent.find - returns first match with * (again I am not posix / linux expert)
- [ ] Resolve regex problems with paths etc..
- [ ] Add Debugger 
- [ ] Fix Basic Commands
- [ ] Implemenet a basic / true like shell
- [ ] Add package / command / plugin for v86
- [ ] Improve Termino.js Core
  - [ ] Before & After Inputs Events etc.. (on etc..)
- [ ] ANSI parser.
- [ ] Fit to screen
- [ ] Turn into reusable library / component that can be reused more than once in one page.
- [ ] Git Command (https://github.com/petersalomonsen/wasm-git)
- [ ] Improve Shell Variables
- [ ] Add Premissions
- [ ] Make True fs wrapper (full spec so can be usable)
- [ ] Tool to compile JS files into commands.
- [ ] Import loader etc.
- [ ] POSIX "file" based like functions / tools... 
- [ ] Add Debugger 
- [ ] Tool to 'apt-get' tools.
- [ ] npm install
- [ ] QuickJS improvements. 
- [ ] Possible bash interpereter
- [ ] Fix Pipe Operators to be true to Linux / Unix specs... (They are garbage currently.) 
- [ ] Make true spec of basic commands.
- [ ] Add documentation.
- [ ] Fix aliases to have signals etc...
- [ ] Improve commands help messages for alias...
- [ ] cd *.txt (should work) - issues with PWD > file name validations... // Navigate to a file with a wildcard
 cd * Attempt to navigate with a wildcard that matches multiple items // Wildcard for any item
cd h* // Navigate to any directory with a wildcard
// Wildcard for directories starting with 'h'
- [ ] Issues with regex - example cat > "json (6).txt" hello (allows path) - incorrect path name
- [ ] cat "json (6).txt" - can not reolve path

https://faculty.tru.ca/nmora/Frequently%20used%20UNIX%20commands.pdf
https://www.digitalocean.com/community/tutorials/linux-commands


*/


const nodeJS = async (code, outputCallback, errorCallback, processArgs=[], options={}) => {
 //console.log(code)
 
  const fetchAdapter = async (url, param) => {
    try{
      
      
    //  console.log(url)
      
    if(url?.url === "QUICK_JS_TOOL"){
      
     
      if(url?.type === "MOCHA_TEST"){
        const mocha = (await import('https://unpkg.com/@live-codes/browser-jest')) 
       
      const args = url.args
      const method = args[0]
      args.shift()
    
     //  console.log(mocha[0][method])
      return mocha
      }
      
      
      if(url?.type === "WRITE"){
      fs.cat(">", url.name, url.content)
      }
      
      if(url?.type === "INPUT"){
        return await term.input('')
      }
      
       if(url?.type === "RENAME"){
        fs.rn(url.oldName, url.newName);
       }
      
      if(url?.type === "MKDIR"){
        fs.mkdir(url.name);
       }
      
       if(url?.type === "RMDIR"){
        fs.rmdir(url.name);
       }
      
       if(url.type === "READ"){
         fs.cat("", url.name)
       }
        
      return
    }  
      
      
    //console.log('hello')  
    // return await term.input("test") 
      
  const res = await fetch(url, { ...param, mode: "cors"}); 
   
  return {
          status: res.status,
        ok: res.ok,
        statusText: res.statusText,
        headers: res.headers,
        type: res.type,
        url: res.url,
        bodyUsed: res.bodyUsed,
        redirected: res.redirected,
        body: res.body,
        async json() {
          if (!this.ok) throw new Error('Response not ok');
          return res.json();
        },
        async text() {
          if (!this.ok) throw new Error('Response not ok');
          return res.text();
        },
        async blob() {
          if (!this.ok) throw new Error('Response not ok');
          return res.blob();
        },
        async formData() {
          if (!this.ok) throw new Error('Response not ok');
          return res.formData();
        },
        async arrayBuffer() {
          if (!this.ok) throw new Error('Response not ok');
          return res.arrayBuffer();
        },
        clone() {
          return res.clone();
        },
      };
    }catch(err){
      throw err
    }
};
  
  /*
  const { Readable, Writable } = require('stream');

const prompt = function(msg) {
  // Create a readable stream to simulate user input
  const input = new Readable({
    read() {}
  });

  // Create a writable stream to simulate output
  const output = new Writable({
    write(chunk, encoding, callback) {
      // Print the prompt message
      process.stdout.write(chunk, encoding, callback);
    }
  });

  // Simulate user input
  process.nextTick(() => {
    // In a real implementation, user input would be read from stdin.
    // Here, we simulate user input with a fixed string after a short delay.
    setTimeout(() => {
      input.push('sample input\n'); // Simulated user input
    }, 1000);
  });

  // Create a simple readline-like interface
  const rl = {
    question: (questionText, callback) => {
      // Write the prompt message
      output.write(questionText);
      
      // Listen for input and call the callback when received
      input.on('data', (data) => {
        callback(data.toString().trim());
      });
    },
    close: () => {
      // Cleanup logic
      input.destroy();
      output.end();
    }
  };

  return rl;
};

// Usage example
const rl = prompt('Enter your name: ');
rl.question('', (answer) => {
  console.log(`You entered: ${answer}`);
  rl.close();
});
*/
  
   const quickJS = (await import("https://esm.sh/@sebastianwessel/quickjs@1.3.0")).quickJS
await import("https://esm.sh/typescript")
await import("https://esm.sh/@hazae41/symbol-dispose-polyfill");
  ///console.log(quickJS)
  const { createRuntime } = await quickJS('https://esm.sh/@jitl/quickjs-wasmfile-release-sync');
   let nodefs = fs.trees().mountFs
   
   function parseJsonFiles(directory) {
  for (const [key, value] of Object.entries(directory)) {
    if (typeof value === 'string' && key.endsWith('.json')) {
      try {
        directory[key] = JSON.parse(value);
         
      } catch (e) {
        
      }
    } else if (typeof value === 'object' && value !== null) {
      parseJsonFiles(value); // Recursively process nested directories
    }
  }
    return directory
}
   
  nodefs = parseJsonFiles(nodefs)
   console.log(options)
  const { evalCode } = await createRuntime({
    mountFs:{src:nodefs},
    allowFetch: true, 
    allowFs: true,
    transformTypescript: true,
    enableTestUtils:options?.mocha || false,
    fetchAdapter,
    env: {
      MY_ENV_VAR: 'env var value',
      PATH: '/usr/local/bin',
      NODE_ENV: 'test',
      FORCE_COLOR: 'true', // Set to 'false' to disable color support
        // Node.js specific environment variables
  NODE_PATH: '', // Set a custom module resolution path
  NODE_OPTIONS: '', // Extra options to pass to Node.js
  NODE_VERSION: "QUICKJS", // Version of Node.js
  NVM_DIR: '', // Directory for Node Version Manager, if using nvm

  // Common environment variables
  HOME: '/home/user', // User's home directory
  USER: 'username', // Username of the current user
  SHELL: '/bin/bash', // Default shell
  TMPDIR: '/tmp', // Directory for temporary files
  LANG: 'en_US.UTF-8', // Locale setting
  LOGNAME: 'username', // User's login name
      
    },
    console: {
      log: (...message) => {
        //console.log(message)
    if (typeof message[0] === 'object' && message[0] !== null && message[0]?.readline) {
      const input = prompt(message)
      return input
    } else {
      outputCallback(message);
    }
  },
      info: (...message) => outputCallback(message),
      warn: (...message) => outputCallback(message),
      error: (...message) => outputCallback(message),
      clear: (...message) => term.clear(),
    }
  });

 
const isPiped = piping
  
 const process = {
  stdout: {
      columns: null, // Number of columns in the terminal
  rows: null, // Number of rows in the terminal
    isTTY: isPiped, // Simulate whether stdout is a TTY or not
      writable:null, // Whether stdout is writable
  encoding:null, // Encoding used for stdout
  bufferSize: null ? null : 0 // Buffer size if available
  },
  argv: processArgs, // Example arguments,
    
  cwd: function() {
    return fs.pwd(); // Default working directory, adjust as needed
  },
  env: {},
  exit: function(code) { //
    class ProcessExitError extends Error {
  constructor(code) {
    super(`Process exited with code ${code}`);
    this.name = 'ProcessExitError';
    this.code = code;
  }
}
     throw new ProcessExitError(code);
  },
  nextTick: function(callback) {
    // Queue microtasks, this is a basic implementation
    Promise.resolve().then(callback);
  },
     title: 'QuickJS',
  pid: 1, // Default PID for simulation
  umask: function(mask) {
    return 0o022; // Default umask value
  },
  getuid: function() {
    return 0; // Default user ID
  },
  setuid: function() {
    throw new Error('Setting user ID not supported');
  },
  getgid: function() {
    return 0; // Default group ID
  },
  setgid: function() {
    throw new Error('Setting group ID not supported');
  },
  arch: function() {
    return 'x64'; // Simulated architecture
  },
  platform: function() {
    return 'linux'; // Simulated platform
  },
  versions: {
    node: 'v14.0.0', // Simulated Node.js version
    v8: '8.4.0' // Simulated V8 version
  }
};

  
   /*
   // Add basic timers for setTimeout and setInterval
global.setTimeout = function (callback, ms, ...args) {
  return new Promise((resolve) => {
    setTimeout(() => {
      callback(...args);
      resolve();
    }, ms);
  });
};

global.setInterval = function (callback, ms, ...args) {
  const id = setInterval(() => {
    callback(...args);
  }, ms);
  return id;
};

global.clearTimeout = function (timeoutId) {
  clearTimeout(timeoutId);
};

global.clearInterval = function (intervalId) {
  clearInterval(intervalId);
};
*/
  // process.argv = [${processArgs.map(arg => `"${arg}"`)}]};

  const _stdout = function (...args){
  stdout({
  objectMode: true,
  label: false,
}).write(args) 
  
}
  
  class ProcessExitError extends Error {
  constructor(code) {
    super(`Process exited with code ${code}`);
    this.name = 'ProcessExitError';
    this.error = `Process exited with code ${code}`,
    this.code = code,
    this.stack = null
  }
}
  try {
    
    /*
       process.stdout.cursor = function(n){
   return {
  up: (n = 1) => \`\\x1b[\${n}A\`,
  down: (n = 1) => \`\\x1b[\${n}B\`,
  right: (n = 1) => \`\\x1b[\${n}C\`,
  left: (n = 1) => \`\\x1b[\${n}D\`,
  move: (x, y) => \`\\x1b[\${y};\${x}H\`,
  clearLine: () => \`\\x1b[2K\`,
  clearScreen: () => \`\\x1b[2J\`
}
    }
    
        // Parse and replace color codes in the output if any
      const parsedOutput = output.replace(/\\x1b\[(\d+)(;\d+)*m/g, (match, p1) => {
        return colorCodes[p1] || match;
      });
    
    */
    /*
    const moduleCache = {};

async function fetchModule(url) {
    const response = await fetch(url);
    const code = await response.text();
    return new Function('exports', 'require', 'module', '__filename', '__dirname', code);
}

async function requirePolyfill(modulePath) {
    if (moduleCache[modulePath]) return moduleCache[modulePath].exports;

    const module = { exports: {} };
    const __filename = modulePath;
    const __dirname = require('path').dirname(modulePath);

    const code = await fetchModule(modulePath);
    await code(module.exports, requirePolyfill, module, __filename, __dirname);

    moduleCache[modulePath] = module;
    return module.exports;
}

// Example usage
requirePolyfill('https://example.com/my-module.js').then(module => {
    // Use the module
    console.log(module);
});

*/
    
    function test(call){
      return prompt(call)
    }
    
  //  console.log(code)
    const res = await evalCode(`
    process.stdout = {isTTY:${isPiped}}

    process.stdout['buffer'] = [] 
    
    process.stdout['write'] =  function(...args) {
      // Join arguments to handle multiple arguments
      const output = args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg)).join(' ');
            // Simulate ANSI color codes and styles
      const colorCodes = process.env.COLOR_CODES || {
        reset: '\\x1b[0m',
        bold: '\\x1b[1m',
        underline: '\\x1b[4m',
        red: '\\x1b[31m',
        green: '\\x1b[32m',
        yellow: '\\x1b[33m',
        blue: '\\x1b[34m',
        magenta: '\\x1b[35m',
        cyan: '\\x1b[36m',
        white: '\\x1b[37m'
      };
      
  

      process.stdout.buffer.push(output);
      
      // Simulate console.log output with new line
      console.log(output);
    },
    
    
    
    process.stdout['getBuffer'] = function() {
      return process.stdout.buffer.join('\\n');
    },
    
 
    
    process.stdout['setTitle'] = function(title) {
      console.log('\\x1b]0;' + title + '\\x07');
    },
    
    process['exit'] = function(code = 0) { //
    class ProcessExitError extends Error {
  constructor(code) {
    super(code);
    this.name = 'ProcessExitError';
    this.code = code;
  }
}
     throw new ProcessExitError(code);
  }
  
  
   // Mocking process.cwd
 /* process.cwd = function() {
    return '/mocked/directory';
  }; */

  // Mocking process.chdir
  process.chdir = function(dir) {
    console.log('Changed directory to:', dir);
  };

  // Mocking process.memoryUsage
  process.memoryUsage = function() {
    return {
      rss: 12345678,
      heapTotal: 2345678,
      heapUsed: 3456789,
      external: 456789,
    };
  };

  // Mocking process.hrtime
  process.hrtime = function() {
    return [0, 123456789]; // Returns [seconds, nanoseconds]
  };

  // Mocking process.uptime
  process.uptime = function() {
    return 1234.56; // Uptime in seconds
  };
  
  const moduleCache = {}
  
   
  // Check if XMLHttpRequest is already defined
 

   function XMLHttpRequest() {
    this.readyState = 0;
    this.responseText = '';
    this.responseXML = null;
    this.status = 0;
    this.statusText = '';
    this.onload = null;
    this.onerror = null;
    this.onreadystatechange = null;
    this.async = true; // Default to true for asynchronous requests
    
    this.open = function(method, url, async = true) {
      this.method = method;
      this.url = url;
      this.async = async;
      this.readyState = 1; // OPENED
      if (typeof this.onreadystatechange === 'function') {
        this.onreadystatechange();
      }
    };
    
    this.send = async function(data) {
      var xhr = this;

      const makeRequest = async () => {
        try {
          const response = await fetch(this.url, {
            method: this.method,
            body: data
          });

          xhr.status = response.status;
          xhr.statusText = response.statusText;
          xhr.readyState = 4; // DONE
          
          xhr.responseText = await response.text();

          if (typeof xhr.onload === 'function') {
            xhr.onload();
          }
          if (typeof xhr.onreadystatechange === 'function') {
            xhr.onreadystatechange();
          }
        } catch (error) {
          if (typeof xhr.onerror === 'function') {
            xhr.onerror();
          }
        }
      };

      if (this.async) {
        await makeRequest(); // Asynchronous call
      } else {
        // Synchronous-like behavior using async/await
          // Synchronous-like behavior using async/await
        (async () => await makeRequest())(); 
      }
    };
  }

  global.XMLHttpRequest = XMLHttpRequest;





  
  
 /* const  require =  function (moduleName) {
 
    
}; */
 
 
/* const mocha = async function (...args){
  return await fetch({ url: "QUICK_JS_TOOL",   args: args, type: "MOCHA_TEST" });
}*/ 
 
 // Create a wrapper object around fs
const fsWrapper =  {
    writeFile: function (...args) {
        return new Promise((resolve, reject) => {
            fs.writeFile(...args, async (err) => {
                if (err) {
                    reject(err);
                } else {
                    await fetch({ url: "QUICK_JS_TOOL", name: args[0], content: args[1], type: "WRITE" });
                    resolve();
                }
            });
        });
    },

    writeFileSync: function (...args) {
        const result = fs.writeFileSync(...args);
        fetch({ url: "QUICK_JS_TOOL", name: args[0], content: args[1], type: "WRITE" });
        return result;
    },

    readFile: function (...args) {
        return new Promise((resolve, reject) => {
            fs.readFile(...args, async (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    await fetch({ url: "QUICK_JS_TOOL", name: args[0], content: data, type: "READ" });
                    resolve(data);
                }
            });
        });
    },

    readFileSync: function (...args) {
        const data = fs.readFileSync(...args);
        fetch({ url: "QUICK_JS_TOOL", name: args[0], content: data, type: "READ" });
        return data;
    },

    rename: function (...args) {
        return new Promise((resolve, reject) => {
            fs.rename(...args, async (err) => {
                if (err) {
                    reject(err);
                } else {
                    await fetch({ url: "QUICK_JS_TOOL", oldName: args[0], newName: args[1], type: "RENAME" });
                    resolve();
                }
            });
        });
    },

    renameSync: function (...args) {
        const result = fs.renameSync(...args);
        fetch({ url: "QUICK_JS_TOOL", oldName: args[0], newName: args[1], type: "RENAME" });
        return result;
    },

    unlink: function (...args) {
        return new Promise((resolve, reject) => {
            fs.unlink(...args, async (err) => {
                if (err) {
                    reject(err);
                } else {
                    await fetch({ url: "QUICK_JS_TOOL", name: args[0], type: "UNLINK" });
                    resolve();
                }
            });
        });
    },

    unlinkSync: function (...args) {
        const result = fs.unlinkSync(...args);
        fetch({ url: "QUICK_JS_TOOL", name: args[0], type: "UNLINK" });
        return result;
    },


    // Asynchronous method to create a directory
    mkdir: function (dirPath, options = {}) {
        return new Promise((resolve, reject) => {
            fs.mkdir(dirPath, options, async (err) => {
                if (err) {
                    reject(err);
                } else {
                    await fetch({ url: "QUICK_JS_TOOL", name: dirPath, type: "MKDIR" });
                    resolve();
                }
            });
        });
    },

    // Synchronous method to create a directory
    mkdirSync: async function (dirPath, options = {}) {
        const result = fs.mkdirSync(dirPath, options);
        await fetch({ url: "QUICK_JS_TOOL", name: dirPath, type: "MKDIR" });
        return result;
    },

    // Asynchronous method to remove a directory
    rmdir: function (dirPath, options = {}) {
        return new Promise((resolve, reject) => {
            fs.rmdir(dirPath, options, async (err) => {
                if (err) {
                    reject(err);
                } else {
                    await fetch({ url: "QUICK_JS_TOOL", name: dirPath, type: "RMDIR" });
                    resolve();
                }
            });
        });
    },

    // Synchronous method to remove a directory
    rmdirSync: async function (dirPath, options = {}) {
        const result = fs.rmdirSync(dirPath, options);
        await fetch({ url: "QUICK_JS_TOOL", name: dirPath, type: "RMDIR" });
        return result;
    },

    // Add more methods if needed
};

 global.fsWrapper = fsWrapper

  const require = function(){
  
  } // required for golang!
  
  
      ${test}
  
  
    process.argv = [${processArgs.map(arg => `"${arg}"`)}]}; 
    
    const os = {};
    os.Args = process.argv // go lang starts at 2nd array
   
    
    
    global.os = os
    
    ` + code);
    
    
    
   
    if (res?.error && res?.error?.name === "ProcessExitError" && Number(res?.error?.message) != 0) {
      throw new ProcessExitError(res?.error?.message)
    }
    
      if (res?.error && res?.error?.name === "ProcessExitError" && Number(res?.error?.message) === 0) {
      res.ok = true
      delete res.error;
    }
    
    //.ok
    return  res
  } catch (error) {
   // console.log(error)
    //instanceof ProcessExitError
 
  if(error.name === "ProcessExitError"){
 
    return {ok:true, data:new ProcessExitError(error.code)}
   // throw new Error(new ProcessExitError(error.code))
  }
       
    
    
    errorCallback(JSON.stringify(error).replaceAll('\\n', '\n'));
  }
};

 


//console.log(split('curl "hey how are you" -o page.html'))
 //


function runCPP(code, input=null){
 
	let output = "";
	var config = {
		stdio: {
			write: function(s) {   
				output += s
			}
		},
		unsigned_overflow: "error"  
	};
  try{
let exitcode = JSCPP.run(code,  input || "", config);
 
 
 
return {exitcode,output}
  }catch(err){
    return err.message
  }
 

  
}
//import parseBash from "https://esm.sh/bash-parser"
 

 

function compare(val1, val2) {
  const diff = JsDiff.createPatch('', 
   val1,
  val2,
    'original', 'modified', { options: { context: 5} }
  );
return diff
}
        let term= Termino(document.querySelector(".terminal"))
      
           async function loadScript(src) {
            // Check if the script is already in the document
            if (document.querySelector(`script[src="${src}"]`)) {
                return; // Script is already loaded
            }
            
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Script load error: ${src}`));
                document.head.appendChild(script);
            });
        }
 
function isMobile() {
    return /Mobi|Android/i.test(navigator.userAgent);
}      
        
function fingerprint() {
  // Github: https://github.com/DosX-dev/braux
  function getWebGLVendor() {
    var canvas = document.createElement('canvas'),
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl && gl.getExtension('WEBGL_debug_renderer_info')) { return gl.getParameter(gl.getExtension('WEBGL_debug_renderer_info').UNMASKED_VENDOR_WEBGL); }
    return 'N/A';
}

function getWebGLRenderer() {
    var canvas = document.createElement('canvas'),
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl && gl.getExtension('WEBGL_debug_renderer_info')) { return gl.getParameter(gl.getExtension('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL); }
    return 'N/A';
}

function getWebGLVersion() {
    var canvas = document.createElement('canvas'),
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (gl) { return gl.getParameter(gl.VERSION); }
    return 'N/A';
}

function isWebAudioAPISupported() { return typeof window.AudioContext !== 'undefined' || typeof window.webkitAudioContext !== 'undefined'; }

function isMIDIAPIAvailable() { return typeof navigator.requestMIDIAccess !== 'undefined'; }

function isWebSocketsSupported() { return 'WebSocket' in window ? 'Supported' : 'Not supported'; }

function isBatteryAPISupported() { return navigator.getBattery ? 'Supported' : 'Not supported'; }

function isWebVRAPIAvailable() { return 'getVRDisplays' in navigator ? 'Supported' : 'Not supported'; }

function isWebXRAPIAvailable() { return 'xr' in navigator ? 'Supported' : 'Not supported'; }

function getMaxAudioContextChannels() {
    try {
        var audioContext = new(window.AudioContext || window.webkitAudioContext)(),
            maxChannels = audioContext.destination.maxChannelCount;
        audioContext.close();
        return maxChannels;
    } catch (exc) {
        return 'N/A'
    }
}

function isChromium() { return typeof window.chrome == 'object'; }

function isOpera() { return typeof window.opera == 'object'; }   
  function isStorageAccessible(storageType) {
    try {
        const testKey = '__test_key__';
        storageType.setItem(testKey, 'test');
        storageType.removeItem(testKey);
        return true;
    } catch (e) {
        return false;
    }
}

function isLocalStorageAccessible() {
    try {
        if (typeof localStorage === 'undefined') {
            return false;
        }
        return isStorageAccessible(localStorage);
    } catch (e) {
        return false;
    }
}

function isSessionStorageAccessible() {
    try {
        if (typeof sessionStorage === 'undefined') {
            return false;
        }
        return isStorageAccessible(sessionStorage);
    } catch (e) {
        return false;
    }
}

var fingerprintData = {
    'User Agent': navigator.userAgent,
    'Browser Language': navigator.language,
    'Cookies Enabled': navigator.cookieEnabled,
    'Screen Resolution': screen.width + 'x' + screen.height,
    'Available Screen Resolution': screen.availWidth + 'x' + screen.availHeight,
    'Color Depth': screen.colorDepth,
    'Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone,
    'Local Storage Enabled': isLocalStorageAccessible(),
    'Session Storage Enabled': isSessionStorageAccessible(),
    'Do Not Track': Boolean(navigator.doNotTrack),
    'Plugins': Array.from(navigator.plugins).map(plugin => plugin.name).join(', '),
    'WebGL Vendor': getWebGLVendor(),
    'WebGL Renderer': getWebGLRenderer(),
    'WebGL Version': getWebGLVersion(),
    'Web Audio API': isWebAudioAPISupported(),
    'MIDI API': isMIDIAPIAvailable(),
    'WebSockets Supported': isWebSocketsSupported(),
    'Battery API Supported': isBatteryAPISupported(),
    'WebVR API Supported': isWebVRAPIAvailable(),
    'AudioContext Max Channels': getMaxAudioContextChannels(),
    'Is Chromium based': isChromium(),
    "Is Mobile device" : isMobile() || "Unknown"
};


    

    return fingerprintData;
}

     
/**
 * ## SystemBin
 * 
 * A virtual filesystem implementation
 * 
 */

function isValidName(name, folder=false){
     const validName = isValidFilename(name)
      if(!validName ){
              throw new Error(`Invalid ${folder ? "folder" : "file"} name: Cannot contain: < > : " / \ | ? *`)
        }
   }
  
function isValidFileName(name){
     return isValidName(name)
} 

function isValidFolderName(name){
     return isValidName(name, true)
}

const vfs = function SystemBin(options ={}) {
  
  options = {root:true, user:"root", home:"home"} // these will be merged.
    let self = this;
  
    const _permissions =  {
    "root": {
      "owner": "rw-------",  // Numeric: 700
      "group": "rw-------",  // Numeric: 700
      "others": "r--------"  // Numeric: 400
    },
    "user": {
      "owner": "rw-------",  // Numeric: 600
      "group": "rw-------",  // Numeric: 600
      "others": "r--------"  // Numeric: 400
    }
   
}
  
    const HOME = '/' + options?.home || "home"
    const whoami = options.user
      
    this.$VERSION = `1.0.0`
  
    const _exports = {"PS1": "\x1B[31m\\u\x1B[0m@\\h:\x1B[34m\\w\x1B[0m\\$",
                     
                       "PS2": null,
  "PS3": null,
  "PS4": null,
  "PROMPT_COMMAND": null,
  "BASH_ENV": null,
  "HISTSIZE": null,
  "HISTFILESIZE": null,
  "HISTCONTROL": null,
  "HISTIGNORE": null,
  "GREP_OPTIONS": null,
  "EDITOR": null,
  "SHELL": null,
  "MAIL": null,
  "PATH": null,
  "LANG": null,
  "HOME": this.$HOME, // User's home directory
  USER: options.user, // Username of the current user
  SHELL: '/bin/bash', // Default shell
  TMPDIR: '/tmp', // Directory for temporary files
  LANG: 'en_US.UTF-8', // Locale setting
  LOGNAME: options.user, // User who started shell login name  
  "TZ": "TIMEZONE"                  
                     } // "\\u@\\h:\\w\\$ " orginal PS1
    
    const envVariables = {
      DARK_BACKGROUND_COLOR:false,
      THEME:"Ubuntu"
    }
    
    let $PS1 = options?.PS1 || _exports.PS1
    this.tree = new TreeStructure(this);
  
    
    this.tree.insert(`${HOME}/${whoami}`, null, {
        type: "directory"
    });
  
  
  
      this.processes = {};  // To keep track of processes
    this.nextPID = 1;     // Next available PID



    this.pointer = this.tree.root;
   this.startTime = Date.now();

  
  SystemBin.prototype.trees = function () {
     
    function buildTree(node) {
        let result = {};
        if (node.type === 'file') {
            return node.contents;
        }
        for (let child of node.children) {
            result[child.key] = buildTree(child);
        }
        return result;
    }

    return {
        mountFs: buildTree(this.tree.root)
    };
 
    /* function listPaths(node, path) {
        let result = [];
        if (node.type) {
            result.push({ path: path  + node.key, type: node.type });
        }
        for (let child of node.children) {
            result = result.concat(listPaths(child, path + '/' + node.key));
        }
        return result;
    }

    return listPaths(this.tree.root, '');*/ 
};
  
      // Existing methods...

    function mergeObjects(existing, updates) {
  const result = { ...existing, ...updates };

  // If 'PS1' is in the existing object but not in the updates, ensure 'PS1' is preserved
  if (existing.hasOwnProperty('PS1') && !updates.hasOwnProperty('PS1')) {
    result['PS1'] = existing['PS1'];
  }

  return result;
}
  
  
  SystemBin.prototype.exports =  _exports
  
  SystemBin.prototype.export = function(name, key){
   // const exportObject = env_exports
   // exportObject[name] = key
    //_exports = mergeObjects(_exports, exportObject)
   _exports[name] = key
  }
  
  
    // Method to create a process
    SystemBin.prototype.createProcess = function (name) {
        if (!name) {
            throw new TypeError("Missing argument: name");
        }
        let pid = this.nextPID++;
        this.processes[pid] = {
            name: name,
            pid: pid,
            created:new Date(),
            status: 'running'  // or other statuses like 'terminated'
        };
        return pid;
    };

    // Method to get process details by PID
    SystemBin.prototype.getProcess = function (pid) {
        if (!this.processes[pid]) {
            throw new Error("Process not found: " + pid);
        }
        return this.processes[pid];
    };

    // Method to terminate a process
    SystemBin.prototype.terminateProcess = function (pid) {
        if (!this.processes[pid]) {
            throw new Error("Process not found: " + pid);
        }
        delete this.processes[pid];
    };

    // Method to list all processes
    SystemBin.prototype.listProcesses = function () {
        return Object.values(this.processes);
    };
  
  SystemBin.prototype.hostname = function() {
    return os.hostname()
}
  
 
  
SystemBin.prototype.getDirectorySize = function (path) {
    if (path === undefined) {
        throw new TypeError("Missing argument: path");
    }
    let node = self._resolve_path(path);
    if (node.type !== "directory") {
        throw new Error("Not a directory: " + path);
    }
    let totalSize = 0;
    function calculateSize(node) {
        if (node.type === "file") {
            totalSize += node.size;
        } else if (node.type === "directory") {
            node.children.forEach(calculateSize);
        }
    }
    calculateSize(node);
    return totalSize;
};  
  
  
 SystemBin.prototype.backup = function (path, backupPath) {
    if (path === undefined || backupPath === undefined) {
        throw new TypeError("Missing argument: path or backupPath");
    }
    let node = self._resolve_path(path);
    let backupNode = self.tree.insert(node.key + "_backup", this._resolve_path(backupPath), { ...node });
    return backupNode;
};

SystemBin.prototype.restore = function (backupPath, originalPath) {
    if (backupPath === undefined || originalPath === undefined) {
        throw new TypeError("Missing argument: backupPath or originalPath");
    }
    let backupNode = self._resolve_path(backupPath);
    let originalNode = self._resolve_path(originalPath);
    if (backupNode.type !== originalNode.type) {
        throw new Error("Incompatible types: cannot restore backup to a different type.");
    }
    originalNode.contents = backupNode.contents;
    // Other properties like lastModified, size, etc., can be restored here as well.
};
 
  
  
  SystemBin.prototype.compress = function (path) {
    if (path === undefined) {
        throw new TypeError("Missing argument: path");
    }
    let node = self._resolve_path(path);
    if (node.type !== "file") {
        throw new Error("Not a file: " + path);
    }
    // Simple compression example (just for demonstration)
    node.contents = btoa(node.contents);
    node.fileType = 'compressed';
};

SystemBin.prototype.decompress = function (path) {
    if (path === undefined) {
        throw new TypeError("Missing argument: path");
    }
    let node = self._resolve_path(path);
    if (node.type !== "file" || node.fileType !== 'compressed') {
        throw new Error("Not a compressed file: " + path);
    }
    // Simple decompression example (just for demonstration)
    node.contents = atob(node.contents);
    node.fileType = 'text'; // or appropriate file type
};

  
 SystemBin.prototype.version = function (path, version) {
    if (path === undefined || version === undefined) {
        throw new TypeError("Missing argument: path or version");
    }
    let node = self._resolve_path(path);
    if (node.type !== "file") {
        throw new Error("Not a file: " + path);
    }
    node.versions = node.versions || [];
    node.versions.push({
        version: version,
        contents: node.contents,
        timestamp: new Date().getTime()
    });
};

SystemBin.prototype.restoreVersion = function (path, version) {
    if (path === undefined || version === undefined) {
        throw new TypeError("Missing argument: path or version");
    }
    let node = self._resolve_path(path);
    if (node.type !== "file") {
        throw new Error("Not a file: " + path);
    }
    let versionInfo = node.versions.find(v => v.version === version);
    if (!versionInfo) {
        throw new Error("Version not found: " + version);
    }
    node.contents = versionInfo.contents;
};
 
  
  SystemBin.prototype.setFileType = function (path, type) {
    if (path === undefined || type === undefined) {
        throw new TypeError("Missing argument: path or type");
    }
    let node = self._resolve_path(path);
    if (node.type !== "file") {
        throw new Error("Not a file: " + path);
    }
    node.fileType = type;
};

  
 SystemBin.prototype.setPermissions = function (path, permissions) {
    if (path === undefined || permissions === undefined) {
        throw new TypeError("Missing argument: path or permissions");
    }
    let node = self._resolve_path(path);
    node.permissions = permissions;
};

SystemBin.prototype.stats = function () {
    function calculateStats(node) {
        let stats = {
            fileCount: 0,
            directoryCount: 0,
            totalSize: 0
        };
        if (node.type === "file") {
            stats.fileCount = 1;
            stats.totalSize = node.size;
        } else if (node.type === "directory") {
            stats.directoryCount = 1;
            node.children.forEach(childStats => {
                let childStatsResult = calculateStats(childStats);
                stats.fileCount += childStatsResult.fileCount;
                stats.directoryCount += childStatsResult.directoryCount;
                stats.totalSize += childStatsResult.totalSize;
            });
        }
        return stats;
    }
    return calculateStats(this.tree.root);
};

  
SystemBin.prototype.createSnapshot = function (snapshotName) {
    if (snapshotName === undefined) {
        throw new TypeError("Missing argument: snapshotName");
    }
    let snapshot = JSON.parse(JSON.stringify(this.tree));
    this.snapshots = this.snapshots || {};
    this.snapshots[snapshotName] = snapshot;
};

SystemBin.prototype.restoreSnapshot = function (snapshotName) {
    if (snapshotName === undefined) {
        throw new TypeError("Missing argument: snapshotName");
    }
    if (!this.snapshots || !this.snapshots[snapshotName]) {
        throw new Error("Snapshot not found: " + snapshotName);
    }
    this.tree = this.snapshots[snapshotName];
};

SystemBin.prototype.listSnapshots = function () {
    return Object.keys(this.snapshots || {});
};

  
SystemBin.prototype.setQuota = function (path, quota) {
    if (path === undefined || quota === undefined) {
        throw new TypeError("Missing argument: path or quota");
    }
    let node = self._resolve_path(path);
    if (node.type !== "directory") {
        throw new Error("Not a directory: " + path);
    }
    node.quota = quota;
};

SystemBin.prototype.checkQuota = function (path) {
    if (path === undefined) {
        throw new TypeError("Missing argument: path");
    }
    let node = self._resolve_path(path);
    if (node.type !== "directory") {
        throw new Error("Not a directory: " + path);
    }
    let usedSpace = 0;
    function calculateUsedSpace(node) {
        if (node.type === "file") {
            usedSpace += node.size;
        } else if (node.type === "directory") {
            node.children.forEach(calculateUsedSpace);
        }
    }
    calculateUsedSpace(node);
    if (node.quota !== undefined && usedSpace > node.quota) {
        throw new Error("Quota exceeded for: " + path);
    }
    return usedSpace;
};
  
  
SystemBin.prototype.createUser = function (username) {
    if (username === undefined) {
        throw new TypeError("Missing argument: username");
    }
    this.users = this.users || {};
    this.users[username] = { groups: [] };
};

SystemBin.prototype.createGroup = function (groupname) {
    if (groupname === undefined) {
        throw new TypeError("Missing argument: groupname");
    }
    this.groups = this.groups || {};
    this.groups[groupname] = { members: [] };
};

SystemBin.prototype.addUserToGroup = function (username, groupname) {
    if (username === undefined || groupname === undefined) {
        throw new TypeError("Missing argument: username or groupname");
    }
    if (!this.users[username] || !this.groups[groupname]) {
        throw new Error("User or group not found.");
    }
    this.users[username].groups.push(groupname);
    this.groups[groupname].members.push(username);
};
  
SystemBin.prototype.mkdirAsync = function (path) {
    return new Promise((resolve, reject) => {
        try {
            this.mkdir(path);
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

SystemBin.prototype.readFileAsync = function (path) {
    return new Promise((resolve, reject) => {
        try {
            let contents = this.cat("", path);
            resolve(contents);
        } catch (e) {
            reject(e);
        }
    });
};

SystemBin.prototype.writeFileAsync = function (path, contents) {
    return new Promise((resolve, reject) => {
        try {
            this.cat(">", path, contents);
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
  

SystemBin.prototype.encryptFile = function (path, key) {
    if (path === undefined || key === undefined) {
        throw new TypeError("Missing argument: path or key");
    }
    let node = self._resolve_path(path);
    if (node.type !== "file") {
        throw new Error("Not a file: " + path);
    }
     
    const cryptr = new Cryptr(key, { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 });
    node.contents = cryptr.encrypt(node.contents);
    node.encrypted = true;
  
    //console.log(node)
};

SystemBin.prototype.decryptFile = function (path, key) {
    if (path === undefined || key === undefined) {
        throw new TypeError("Missing argument: path or key");
    }
    let node = self._resolve_path(path);
    if (node.type !== "file" || !node.encrypted) {
        throw new Error("Not an encrypted file: " + path);
    }
  const cryptr = new Cryptr(key, { encoding: 'base64', pbkdf2Iterations: 10000, saltLength: 10 });
    
    node.contents = cryptr.decrypt(node.contents);
    node.encrypted = false;
};
  
  
SystemBin.prototype.getPermissions = function (path) {
    if (path === undefined) {
        throw new TypeError("Missing argument: path");
    }
    let node = self._resolve_path(path);
    return node.permissions;
};
 
  
   SystemBin.prototype.printf = function (formatString, ...args) {
     
      /*
      var printf = require('printf');
var result = printf(format, args...);
*/ 
     
    let i = 0;
    const result = formatString.replace(/%([sdif])/g, (match, type) => {
        if (i >= args.length) return match; // If there are not enough arguments, return the original match
        let value = args[i++]; // Get the next argument
        switch (type) {
            case 's': // String
                return String(value);
            case 'd': // Decimal (integer)
            case 'i': // Integer (alias for decimal)
                return parseInt(value, 10);
            case 'f': // Floating point
                return parseFloat(value).toFixed(6); // Default to 6 decimal places
            default:
                return match; // Return the original match if type is not recognized
        }
    });

    return result;
}
  
  SystemBin.prototype.ping = async function (url) {
    
    if(!url){
       throw new TypeError("Missing argument: url");
    }
    const startTime = Date.now();

    try {
        const response = await fetch(url, {
            method: 'HEAD',  // Using HEAD to minimize data transfer
        });
        const endTime = Date.now();
        const duration = endTime - startTime;
        return {
            success: response.ok,
            status: response.status,
            duration: duration
        };
    } catch (error) {
        const endTime = Date.now();
        const duration = endTime - startTime;
        return {
            success: false,
            status: null,
            duration: duration,
            error: error.message
        };
    }
}
  
  
  SystemBin.prototype.uptime = function() {
        const currentTime = Date.now();
        const uptimeMilliseconds = currentTime - this.startTime;
        const days = Math.floor(uptimeMilliseconds / (24 * 3600 * 1000));
        const hours = Math.floor((uptimeMilliseconds % (24 * 3600 * 1000)) / (3600 * 1000));
        const minutes = Math.floor((uptimeMilliseconds % (3600 * 1000)) / (60 * 1000));
        const seconds = Math.floor((uptimeMilliseconds % (60 * 1000)) / 1000);
        
        return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    }
  
  // Method to display the directory structure as a tree
SystemBin.prototype.displayTree = function (path) {
    let node = self._resolve_path(path);
    
    function traverse(node, depth) {
        let output = "";
        let indent = " ".repeat(depth * 4);  // Indentation for tree levels
        let hasChildren = node.children.length > 0;
        
        if (depth > 0) {
            output += `${indent}${hasChildren ? "├── " : "└── "}${node.key}\n`;
        } else {
            output += `${node.key}\n`;
        }
        
        node.children.forEach((child, index) => {
            let childIndent = indent + (index < node.children.length - 1 ? "│   " : "    ");
            output += traverse(child, depth + 1, childIndent);
        });
        
        return output;
    }

    return traverse(node, 0).trim();  // Trim to remove any trailing newlines
};
  
    SystemBin.prototype.findDuplicates = function () {
        let seen = new Map();
        let duplicates = [];

        function traverse(node) {
            if (node.type === "file") {
                if (seen.has(node.contents)) {
                    duplicates.push({
                        original: seen.get(node.contents),
                        duplicate: node
                    });
                } else {
                    seen.set(node.contents, node);
                }
            }
            for (let child of node.children) {
                traverse(child);
            }
        }

        traverse(this.tree.root);
        return duplicates;
    };

     

      SystemBin.prototype.addPlugin = function(name, method) {
        if (typeof name !== "string" || typeof method !== "function") {
            throw new TypeError("Invalid arguments: name must be a string and method must be a function");
        }
        this[name] = method.bind(this);
    };
  
  
    SystemBin.prototype.fileExists = function(pathTo) {
         try{
            let node = self._resolve_path(pathTo);
            if (node.type === "file" && node.key === path.basename(pathTo)) {
                return true
            }
         }catch(err){
           return false
         }
        }
  
    SystemBin.prototype.diff = function (path1, path2) {
        if (path1 === undefined) {
            throw new TypeError("Missing argument: path1");
        } else if (path2 === undefined) {
            throw new TypeError("Missing argument: path2");
        }

        function getNodeContents(path) {
            let node = self._resolve_path(path);
            if (node.type === "file") {
                return node.contents;
            }
            throw new Error("Path does not refer to a file: " + path);
        }

        let contents1 = getNodeContents(path1);
        let contents2 = getNodeContents(path2);

       
        return   diffLines(contents1 , contents2);
    };

    SystemBin.prototype.searchContent = function (query) {
        if (query === undefined) {
            throw new TypeError("Missing argument: query");
        }

        let results = [];

        function searchNode(node) {
            if (node.type === "file" && node.contents.includes(query)) {
                results.push(self._absolute_path(node));
            }
            for (let child of node.children) {
                searchNode(child);
            }
        }

        searchNode(this.tree.root);
        return results;
    };

    SystemBin.prototype.truncate = function (path, length) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        } else if (length === undefined) {
            throw new TypeError("Missing argument: length");
        }

        let node = self._resolve_path(path);
        if (node.type !== "file") {
            throw new Error("Not a file: " + path);
        }

        if (length < 0) {
            throw new Error("Length must be non-negative.");
        }

        node.contents = node.contents.substring(0, length);
        node.size = new Blob([node.contents]).size;
    };

    SystemBin.prototype.history = function (limit) {
        if (limit === undefined) {
            throw new TypeError("Missing argument: limit");
        }

        if (typeof limit !== "number" || limit <= 0) {
            throw new Error("Limit must be a positive number.");
        }

        let commands = this._commandHistory || [];
        return commands.slice(-limit);
    };

    SystemBin.prototype._commandHistory = []; // Internal storage for command history

    SystemBin.prototype._logCommand = function (command) {
      if(this._commandHistory){
        this._commandHistory.push({
            command: command,
            timestamp: new Date().toISOString()
        });
      }
    };
  
    SystemBin.prototype.find = function (query) {
        if (query === undefined) {
            throw new TypeError("Missing argument: query");
        }
        //query = sanitizeFilename(query)
        return this.tree.search(query).map(node => self._absolute_path(node));
    };
  
  
      SystemBin.prototype.pwd = function () {
        return self._absolute_path(this.pointer);
    };
  
  
     // Shutdown function to clean up resources
    SystemBin.prototype.dispose = function() {
        // Clear properties
        this.tree = null;
        this.pointer = null;
        this.startTime = null;

        // Clear PS1 if needed
        $PS1 = null;
      this._commandHistory = null;
      self = null
    }
  
   SystemBin.prototype.whoami = function () {
        return  whoami
    };
  
  
     SystemBin.prototype.$HOME = function () {
        return  `${HOME}/${whoami}`
    };
  
    SystemBin.prototype.$PS1 = function () {
        return $PS1
    };
  
  SystemBin.prototype.curl = async function (url, path) {
    if (url === undefined) {
        throw new TypeError("Missing argument: url");
    }
     

    try {
        // Fetch data from the URL
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.statusText);
        }
        
        let content = await response.text(); // You can use .blob() or .json() if needed based on content type

        if(!path){
          return content
        }
      
        let segments = path.replace(/\/+$/g, "").split("/");
        let parent = this._resolve_path(segments.slice(0, segments.length - 1).join("/"));
        let name = segments[segments.length - 1];

        // Create or update the file with the fetched content
        let node = parent.find(name)[0];
        if (node && node.type !== "file") {
            throw new Error("Not a file: " + path);
        } else if (node === undefined) {
          node = this.makeNewFile(name, parent);
            
        }
        node.contents = content;
        node.size = new Blob([content]).size;
        node.lastModified = new Date().getTime();
          this._emit('change', {
                type: 'write',
                path: path,
                details: {
                    node: node,
                    contents: node.contents
                }
            });
    } catch (error) {
        console.error("Failed to fetch or write file:", error);
        throw error; // Rethrow the error after logging
    }
};
  
    SystemBin.prototype.du = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let node = self._resolve_path(path);
        if (node.type === "directory") {
            let size = 0;
            // Format the output
        function formatSize(bytes) {
            if (bytes < 1024) return `${bytes}B`;
            else if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}K`;
            else if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)}M`;
            else return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)}G`;
        }
            function calculateSize(node) {
                if (node.type === "file") {
                    size += node.size;
                } else if (node.type === "directory") {
                    for (let child of node.children) {
                        calculateSize(child);
                    }
                }
            }
            calculateSize(node);
            return  formatSize(size);
        }
        throw new Error("Not a directory: " + path);
    };

  
      SystemBin.prototype.stat = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let node = self._resolve_path(path);
        if (node) {
            return {
                path: self._absolute_path(node),
                type: node.type,
                size: node?.size || 0,   
                lastModified: node.lastModified
            };
        }
        throw new Error("File or directory not found: " + path);
    };

  SystemBin.prototype.mkfile  = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
    
    return "NOT IMPLMENTED YET" // dope
    
  }
  
    SystemBin.prototype.mkdirp = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let segments = path.replace(/\/+$/g, "").split("/");
        let currentPath = "";
        for (let i = 0; i < segments.length; i++) {
            currentPath += "/" + segments[i];
            try {
                self.mkdir(currentPath);
            } catch (e) {
                if (!e.message.startsWith("Name already taken:")) {
                    throw e;
                }
            }
        }
    };

SystemBin.prototype.timedatectl =  function(){
  const now = new Date();

  // Local time
  const localTime = now.toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
  const localTimeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
  const formattedLocalTime = now.toLocaleDateString('en-US', localTimeOptions);

  // UTC time
  const utcTime = now.toUTCString();

  

  // Time zone
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;


  return {
    localTime: formattedLocalTime,
    utcTime: utcTime,
    timeZone: timeZone
  };
}
  
 SystemBin.prototype.date = function(args) {
    // If no arguments are provided, display the current date and time
   const currentDate = new Date();
    if (!args || args.length === 0) {
      return formatDate(currentDate);
    }

    // Handle setting the date and time
    if (args[0] === '-s') {
      if (args.length < 2) {
        return "Error: No date string provided."
      }

      // Parse the date string
      try {
        this.currentDate = new Date(args.slice(1).join(" "));
        if (isNaN(currentDate)) {
          throw new Error("Invalid date format");
        }
         return formatDate(currentDate)
      } catch (e) {
        throw e
      }
      return;
    }

    // Handle UTC output
    if (args[0] === '-u') {
      return formatDate(currentDate, true)
    }

    // Handle custom format
    if (args[0].startsWith('+')) {
      //args.slice()
      args[0] = args[0].replace("+", "").trim()
      const format = args.join(" ")
      return formatDate(currentDate, false, format)
    }

    return "Error: Invalid arguments."
  }

 function formatDate(date, isUTC = false, format = "default") {
    const options = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'long',
    };

    if (isUTC) {
      options.timeZone = 'UTC';
    }

    // Handle default format
    if (format === 'default') {
      return date.toLocaleString('en-US', options);
    }

    // Handle custom format
    const formatters = {
      '%Y': date.getFullYear(),
      '%m': String(date.getMonth() + 1).padStart(2, '0'),
      '%d': String(date.getDate()).padStart(2, '0'),
      '%H': String(date.getHours()).padStart(2, '0'),
      '%M': String(date.getMinutes()).padStart(2, '0'),
      '%S': String(date.getSeconds()).padStart(2, '0'),
      '%A': date.toLocaleString('en-US', { weekday: 'long' }),
      '%a': date.toLocaleString('en-US', { weekday: 'short' }),
      '%B': date.toLocaleString('en-US', { month: 'long' }),
      '%b': date.toLocaleString('en-US', { month: 'short' }),
       '%s': Math.floor(date.getTime() / 1000), // Unix timestamp in seconds
        '%N': (date.getTime() % 1000) * 1000000 // Nanoseconds (not precisely accurate, approximation)
    };
   console.log(format)  ////
  return format.replace(/%[YmdHMSAbasN]/g, match => formatters[match] || match);
  //  return format.replace(/%[YmdHMSAb]/g, match => formatters[match] || match);
  }
  
  
    SystemBin.prototype.ln = function (target, link) {
        if (target === undefined) {
            throw new TypeError("Missing argument: target");
        } else if (link === undefined) {
            throw new TypeError("Missing argument: link");
        }
        let targetNode = self._resolve_path(target);
        let parent = self._resolve_path(link.substring(0, link.lastIndexOf("/")));
        let name = link.substring(link.lastIndexOf("/") + 1);
        if (parent.find(name).length) {
            throw new Error("Link name already taken: " + name);
        }
        this.tree.insert(name, parent, {
            type: "link",
            target: targetNode
        });
    };
  
  /*
  SystemBin.prototype.symlink = function (targetPath, linkPath) {
    let target = self._resolve_path(targetPath);
    let linkName = linkPath.split("/").pop();
    let parent = self._resolve_path(linkPath.replace(/\/[^/]*$/, ""));
    let properties = {
        type: "symlink",
        target: target
    };
    this.tree.insert(linkName, parent, properties);
};

SystemBin.prototype.readlink = function (path) {
    let node = self._resolve_path(path);
    if (node.type !== "symlink") {
        throw new Error("Not a symlink: " + path);
    }
    return node.target;
};
*/

    SystemBin.prototype.readlink = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let node = self._resolve_path(path);
        if (node.type === "link") {
            return self._absolute_path(node.target);
        }
        throw new Error("Not a link: " + path);
    };
  
  function grep(pattern, filePath) {
    // to do
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = new RegExp(pattern, 'g');
    return content.match(regex) || [];
}

  SystemBin.prototype.grep = function (pattern, path) {
    if (pattern === undefined || path === undefined) {
        throw new TypeError("Missing argument: pattern or path");
    }
    
    let node = this._resolve_path(path);
    if (node.type !== "directory") {
        throw new Error("Not a directory: " + path);
    }
    
    function searchInFile(node) {
        if (node.type === "file" && node.contents.includes(pattern)) {
            return { file: node.key, contents: node.contents };
        }
        return null;
    }
    
    function searchDirectory(node) {
        let results = [];
        let result = searchInFile(node);
        if (result) {
            results.push(result);
        }
        for (let child of node.children) {
            results = results.concat(searchDirectory(child));
        }
        return results;
    }
    
    return searchDirectory(node);
};
  
  function uniq(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const uniqueLines = [...new Set(lines)];
    return uniqueLines.join('\n');
}
  
  
function sort(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n').sort().join('\n');
}
  
  function cut(filePath, delimiter = ' ', field = 1) {
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n')
                  .map(line => line.split(delimiter)[field - 1])
                  .filter(field => field !== undefined);
}
  
    SystemBin.prototype.wc =  function (filePath) {
       if (filePath === undefined) {
            throw new TypeError("Missing argument: filePath");
        }
        let segments = filePath.replace(/\/+$/g, "").split("/");
    let content;
        let parent = self._resolve_path(segments.slice(0, segments.length - 1).join("/"));
        let name = segments[segments.length - 1];
        let node = parent.find(name)[0];
       if (node === undefined) {
                throw new Error("File not found: " + filePath);
        }
        if (node.type === "file") {
         content = node.contents
        }
          if (node.type !== "file") {
            throw new Error("Not a file: " + filePath);
        } 
    const lines = content.split('\n').length;
    const words = content.split(/\s+/).filter(Boolean).length;
    const chars = content.length;
    return { lines, words, chars };
}
  
  
  function split(filePath, linesPerFile) {
    const content = fs.readFileSync(filePath, 'utf8').split('\n');
    const numFiles = Math.ceil(content.length / linesPerFile);
    let fileIndex = 1;

    for (let i = 0; i < numFiles; i++) {
        const chunk = content.slice(i * linesPerFile, (i + 1) * linesPerFile).join('\n');
        fs.writeFileSync(`${filePath}_part${fileIndex}.txt`, chunk);
        fileIndex++;
    }

    return `File split into ${numFiles} parts.`;
}
  
  function merge(filePaths, outputPath) {
    const writeStream = fs.createWriteStream(outputPath);
    filePaths.forEach(filePath => {
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(writeStream, { end: false });
        readStream.on('end', () => {
            // When all files are read, close the output stream
            if (filePaths.indexOf(filePath) === filePaths.length - 1) {
                writeStream.end();
            }
        });
    });
    return `Files merged into: ${outputPath}`;
}

  
  function filenameWithoutExtension(filePath) {
    return path.parse(filePath).name;
}
  
  function dirname(filePath) {
    return path.dirname(filePath);
}
  
  function basename(filePath) {
    return path.basename(filePath);
}
  SystemBin.prototype.chown = function (path, owner, group) {
    let node = self._resolve_path(path);
    if (node.type !== "file" && node.type !== "directory") {
        throw new Error("Not a file or directory: " + path);
    }
    node.owner = owner;
    node.group = group;
};
  
  SystemBin.prototype.chmod = function (path, permissions) {
    if (path === undefined) {
        throw new TypeError("Missing argument: path");
    }
    if (permissions === undefined) {
        throw new TypeError("Missing argument: permissions");
    }
    if (!/^[rwx-]{3}$/.test(permissions)) {
        throw new Error("Invalid permissions format. Use 'rwx', 'rw-', etc.");
    }

    let node = this._resolve_path(path.replace(/\/+$/g, ""));
    if (node.type !== "file") {
        throw new Error("Not a file: " + path);
    }
    node.permissions = permissions;
      return `Permissions for ${path} set to ${permissions}`;
};

  
  SystemBin.prototype.canAccess = function (node, accessType) {
    if (node.type === "directory" || node.type === "file") {
        const permissions = node.permissions;
        switch (accessType) {
            case 'read':
                return permissions.includes('r');
            case 'write':
                return permissions.includes('w');
            case 'execute':
                return permissions.includes('x');
            default:
                throw new Error("Invalid access type. Use 'read', 'write', or 'execute'.");
        }
    }
    return false;
};
  /* example usage
   if (!this.canAccess(node, 'write')) {
        throw new Error("Permission denied: Cannot delete this file.");
    }
    */
  
  function sed(filePath, pattern, replacement) {
    const content = fs.readFileSync(filePath, 'utf8');
    const updatedContent = content.replace(new RegExp(pattern, 'g'), replacement);
    return updatedContent;
}
    SystemBin.prototype.head = function (filePath, numLines = 10) {
  
         if (filePath === undefined) {
            throw new TypeError("Missing argument: filePath");
        }
        let segments = filePath.replace(/\/+$/g, "").split("/");
        let parent = self._resolve_path(segments.slice(0, segments.length - 1).join("/"));
        let name = segments[segments.length - 1];
        let node = parent.find(name)[0];
       if (node === undefined) {
                throw new Error("File not found: " + filePath);
        }
        if (node.type === "file") {
            return  node.contents.split('\n').slice(0, numLines).join('\n');
        }
   //     throw new Error("Not a file: " + filePath);
   
    
  
}
  
    SystemBin.prototype.tail = function (filePath, numLines = 10) {
  
  
      
         if (filePath === undefined) {
            throw new TypeError("Missing argument: filePath");
        }
        let segments = filePath.replace(/\/+$/g, "").split("/");
        let parent = self._resolve_path(segments.slice(0, segments.length - 1).join("/"));
        let name = segments[segments.length - 1];
        let node = parent.find(name)[0];
       if (node === undefined) {
                throw new Error("File not found: " + filePath);
        }
        if (node.type === "file") {
         // console.log(node.contents)
            return  node.contents.split('\n').slice(-numLines).join('\n');
        }
      
      
            throw new Error("Not a file: " + filePath);
  
   //     throw new Error("Not a file: " + filePath);
   
    
  
}

  
      SystemBin.prototype.touch = function (path, atime, mtime) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let segments = path.replace(/\/+$/g, "").split("/");
        let parent = self._resolve_path(
            segments.slice(0, segments.length - 1).join("/")
        );
        let name = segments[segments.length - 1];
       // isValidFileName(name)
        
        let node = parent.find(name)[0];
       // console.log(name,parent,node)
        if (node) {
            if (node.type !== "file") {
                throw new Error("Not a file: " + path);
            }
          node.lastAccessed = atime || new Date().getTime();
            node.lastModified = new Date().getTime();
        } else {
          
          this.makeNewFile(name, parent);
          /*  this.tree.insert(name, parent, {
                type: "file",
                lastAccessed: atime || new Date().getTime(),
                lastModified: new Date().getTime(),
                size: "",
                contents: ""
            });*/ 
        }
    };
  
    SystemBin.prototype.mkdir = function (pathTo) {
        if (pathTo === undefined) {
            throw new TypeError("Missing argument: path");
        }
      
         if(pathTo.length === 0){
           throw new TypeError("Invalid path name");
         }
        
        let segments = pathTo.replace(/\/+$/g, "").split("/");
        let parent = self._resolve_path(
            segments.slice(0, segments.length - 1).join("/")
        );
        let name = segments[segments.length - 1];
        const dirDetails = parent.find(name, true)  
         
        pathTo = path.basename(pathTo)
        
       if (dirDetails.length) {
            throw new Error("Name already taken: " + name);
        }
       //console.log("Making dir" + name)
      // const t = isValidFolderName(name)
      //
        isValidFolderName(name)
        this.tree.insert(name, parent, {
            type: "directory"
        });
        this._emit('change', {
            type: 'mkdir',
            path: pathTo,
            details: {
                parent: parent,
                name: name
            }
        });
    };

    SystemBin.prototype.rmdir = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let node = self._resolve_path(path.replace(/\/+$/g, ""));
        if (node === this.tree.root) {
            throw new Error("You cannot delete the root directory.");
        } else if (node.type !== "directory") {
            throw new Error("Not a directory: " + node.key);
        }
        this.tree.delete(node);
        let current_path = self._absolute_path(this.pointer);
        let node_path = self._absolute_path(node);
        if (node_path.match("^" + current_path) && current_path.length) {
            this.pointer = node.parent;
        }
        this._emit('change', {
            type: 'rmdir',
            path: path,
            details: {
                node: node
            }
        });
    };

    SystemBin.prototype.cd = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        const node = self._resolve_path(path)
         if (node.type != "directory") {
            throw new Error("Not a directory: " + path);
        }
       
        
        this.pointer = node
        return this.pointer;
    };
  
  /*
    // Example BLOB
        const blob = new Blob(['Hello, world!'], { type: 'text/plain' });

        // Creating a File object with metadata
        const file = new File([blob], 'example.txt', {
            type: blob.type,
            lastModified: new Date().getTime()
        });

*/

  
   SystemBin.prototype.makeNewFile= function (name, parent){
     const node = this.tree.insert(name, parent, {
                    type: "file",
                    lastModified: new Date().getTime(),
                    size: 0,
                    contents: "",
                    locked:false,
                    birthTime: new Date().getTime(),
                    lastAccessed:new Date(),
                    premissions:convert.stat('660'), // `permission` will be set to `rw-rw----`
                  owner:fs.whoami()
                });
     
     this._emit('change', {
                type: 'insert',
                path: this._absolute_path(node),
                details: {
                    node: node,
                    contents: node.contents
                }
            })
     
     return node
   }
  
  
    SystemBin.prototype.cat = function (mode, path, contents) {
      
     // console.log(contents)
   
     // console.log(mode, path)
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
      //  path = sanitizeFilename(encode(path))
      
        let segments = path.replace(/\/+$/g, "").split("/");
        let parent = self._resolve_path(segments.slice(0, segments.length - 1).join("/"));
        let name = segments[segments.length - 1];
       
       
 
        let node = parent.find(name)[0];
        if (node && node.type !== "file") {
            throw new Error("Not a file: " + path);
        } else if (mode.length) {
           // isValidFileName(name)
            if (node === undefined) {
                node = this.makeNewFile(name, parent);
            }
          
          
            node.size = mode === ">" ? new Blob([contents]).size : new Blob([node.contents + contents]).size;
            node.contents = mode === ">" ? contents : node.contents + contents;
             this._emit('change', {
                type: 'write',
                path: path,
                details: {
                    node: node,
                    contents: node.contents
                }
            });
        } else {
            if (node === undefined) {
                throw new Error("File not found: " + path);
            }
              this._emit('change', {
                type: 'read',
                path: path,
                details: {
                    node: node,
                    contents: node.contents
                }
            });
            return node.contents;
        }
    };
  
/*  TODO use this - cat..

The `cat` command in Unix-like operating systems is used to concatenate and display the contents of files. Here are a few examples of how you might use `cat`:

1. **Display the contents of a file:**
   ```bash
   cat filename.txt
   ```
   This command will output the contents of `filename.txt` to the terminal.

2. **Concatenate multiple files and display them:**
   ```bash
   cat file1.txt file2.txt
   ```
   This will display the contents of `file1.txt` followed by the contents of `file2.txt`.

3. **Create a new file with content from the terminal:**
   ```bash
   cat > newfile.txt
   ```
   After running this command, you can type text directly into the terminal. Press `Ctrl+D` to save the text and exit.

4. **Append content to an existing file:**
   ```bash
   cat >> existingfile.txt
   ```
   Similar to the previous example, but this appends the typed content to `existingfile.txt`. Press `Ctrl+D` to finish.

5. **Display line numbers along with file content:**
   ```bash
   cat -n filename.txt
   ```
   This will display the content of `filename.txt` with line numbers prefixed.

6. **Display contents of a file with non-printing characters visible:**
   ```bash
   cat -v filename.txt
   ```
   This is useful for showing non-printing characters (like control characters) that are otherwise hidden.

7. **Combine files into a single file:**
   ```bash
   cat file1.txt file2.txt > combined.txt
   ```
   This will concatenate `file1.txt` and `file2.txt` and save the result to `combined.txt`.

These examples demonstrate some of the basic functionalities of the `cat` command. It's quite versatile for handling text files and streamlining file operations. 

SystemBin.prototype.cat = function (mode, path, contents) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let segments = path.split("/").filter(Boolean);
        let parent = self._resolve_path(segments.slice(0, -1).join("/"));
        let name = segments[segments.length - 1];
        let node = parent.find(name)[0];
        if (node && node.type !== "file") {
            throw new Error("Not a file: " + path);
        } else if (mode === ">") {
            if (node === undefined) {
                node = this.tree.insert(name, parent, {
                    type: "file",
                    lastModified: Date.now(),
                    size: contents.length,
                    contents: contents
                });
            } else {
                node.contents = contents;
                node.size = contents.length;
            }
        } else if (mode === ">>") {
            if (node === undefined) {
                throw new Error("File not found: " + path);
            }
            node.contents += contents;
            node.size = node.contents.length;
        } else {
            if (node === undefined) {
                throw new Error("File not found: " + path);
            }
            return node.contents;
        }
     */

    SystemBin.prototype.rm = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let node = self._resolve_path(path);
        if (node.type !== "file") {
            throw new Error("Not a file: " + node.key);
        }
        this.tree.delete(node);
        this._emit('change', {
            type: 'rm',
            path: path,
            details: {
                node: node
            }
        });     
    };


    SystemBin.prototype.rm = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let node = self._resolve_path(path.replace(/\/+$/g, ""));
        if (node.type !== "file") {
            throw new Error("Not a file: " + node.key);
        }
        this.tree.delete(node);
       this._emit('change', {
            type: 'rm',
            path: path,
            details: {
                node: node
            }
        });     
      
    };

   
  
  
    SystemBin.prototype.rn = function (path, name) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        } else if (name === undefined) {
            throw new TypeError("Missing argument: name");
        }
        let node = self._resolve_path(path);
        if (node === this.tree.root) {
            throw new Error("You cannot rename the root directory.");
        }
       let isFolder = false
       
       if(node.type === "directory"){
         isFolder = true
       }
      
        let search = node.parent.find(name, isFolder)[0];
        if (search && search.type === node.type && search.type === "file") {
            throw new Error("Rename failed. Name already taken.");
        }
      console.log(node)
       if (search && search.type === node.type && search.type === "directory" && search?.children?.length != 0) {
            throw new Error("Rename failed. Folder name already taken and is not empty.");
        }
      
      // node?.children?.length != 0
        if (node.type === "file") {
           isValidFileName(name)
        }
      
        if(node.type === "directory"){
          this.tree.delete(search);
        }
        node.key = name;
        this._emit('change', {
            type: 'rename',
            path: path,
            details: {
                node: node,
                newName: name
            }
        });
    };

SystemBin.prototype.wget = async function (url, options = {}) {
    const { path, headers = {}, output = false, quiet = false } = options;

    if (url === undefined) {
        throw new TypeError("Missing argument: url");
    }
    if (path === undefined && !output) {
        throw new TypeError("Missing argument: path or output");
    }

    // Fetch the content from the URL with custom headers
    let response;
    try {
        response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.statusText);
        }
    } catch (error) {
        throw new Error("Failed to fetch content from URL: " + error.message);
    }

    // Get the content as a Blob
    let blob = await response.blob();
    let contentType = response.headers.get('Content-Type') || 'application/octet-stream';
    
    // Determine the filename from the path or URL
    let filename = output ? output : (path ? path.split('/').pop() : 'downloaded_file');

    // Create an Object URL for the Blob
    let objectURL = URL.createObjectURL(blob);

    if (!quiet) {
        // Create a temporary link element to trigger the download
        let link = document.createElement('a');
        link.href = objectURL;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        
        // Cleanup
        document.body.removeChild(link);
    }

    URL.revokeObjectURL(objectURL);

    // Optionally, simulate file system update
    if (path) {
        let segments = path.replace(/\/+$/g, "").split("/");
        let parent = this._resolve_path(segments.slice(0, segments.length - 1).join("/"));
        let name = segments[segments.length - 1];

        // Create or update the file with the downloaded content
        let node = parent.find(name)[0];
        if (node && node.type !== "file") {
            throw new Error("Not a file: " + path);
        } else if (node === undefined) {
            node = this.tree.insert(name, parent, {
                type: "file",
                lastModified: new Date().getTime(),
                size: "",
                contents: "",
                atime:null,
                birthTime: new Date().getTime(),
            });
        }
        node.contents = await blob.text();
        node.size = blob.size;
        node.lastModified = new Date().getTime();
        node.atime = new Date().getTime();
    }
};

  
SystemBin.prototype.echo = function (texts) {
  let newLineFlag = true
  if (texts.length > 0 && texts[0] === '-n') {
    newLineFlag = false;
    texts.shift(); // Remove the first argument (-n)
}

   
  // Assuming fs.$HOME() returns the home directory as a string
  const home = this.$HOME(); // Replace with the appropriate method to get HOME path
  const user = this.whoami(); // Replace with the appropriate method to get USER name
  const path = this.pwd(); // Replace with the appropriate method to get PATH
  
    const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  
  const currentUnixTimestamp = Math.floor(Date.now() / 1000); // Unix timestamp
/////
  // Map over each text argument
  let formattedText = String(texts.map(text => {
    // Ensure the item is a string
    // console.log(text)
   if (typeof text === 'string') {
       return text
        .replace(/\$HOME/g, home)
        .replace(/\$USER/g, user)
        .replace(/\$PATH/g, path)
        .replace(/\$DATE/g, currentDate)
        .replace(/\$TIME/g, currentTime)
        .replace(/\$TIMESTAMP/g, currentUnixTimestamp)
.replace(/\$HOSTNAME/g, os.hostname) // Adding hostname replacement
        .replace(/^~(\/|$)/, home + '$1')
     .replace(/\$PARENT/g, path.split('/').slice(0, -1).join('/'))
.replace(/\$CWD/g, path)
             .replace(/\$OSNAME/g, os.type()) // OS name (e.g., 'Linux', 'Darwin')
        .replace(/\$OSARCH/g, os.arch()) // OS architecture (e.g., 'x64', 'arm64')
       .replace(/\$TOTALMEM/g, (os.totalmem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB') // Total memory
        .replace(/\$FREEMEM/g, (os.freemem() / (1024 * 1024 * 1024)).toFixed(2) + ' GB') // Free memory
     .replace(/\$SHELL/g,  "Termino.js Shell") // process?.env?.SHELL  
     .replace(/\$VERSION/g,  fs.$VERSION) // process?.env?.SHELL 
      .replace(/\$RANDOM/g,  Math.floor(Math.random() * 32768)) //  Generates a random number between 0 and 32767.
     .replace(/\$HOSTNAME/g,  os.hostname())   // Returns the hostname of the machine (simulated).
     .replace(/\$EPOCHSECONDS/g,  Math.floor(Date.now() / 1000))   // Returns the number of seconds since the epoch (January 1, 1970).
     
      
     .replace(/\$FILESIZE\(([^)]+)\)/g, (match, filePath) => {
          
          try {
          
            
            return this.stat(filePath).size + ' bytes';
          } catch (e) {
            return match;
          }
        })
     
      .replace(/\$FILEMODTIME\(([^)]+)\)/g, (match, filePath) => {
          try {
            const stats = this.stat(filePath);
            return new Date(stats.mtime).toLocaleString(); // File modification time
          } catch (e) {
            return match;
          }
        })
     
        .replace(/\$FILECREATETIME\(([^)]+)\)/g, (match, filePath) => {
          try {
            const stats = this.stat(filePath);
            return new Date(stats.birthtime).toLocaleString(); // File creation time
          } catch (e) {
            return match;
          }
        })
        .replace(/\$FILETYPE\(([^)]+)\)/g, (match, filePath) => {
          try {
            const stats = this.stat(filePath);
            return stats.isDirectory() ? 'Directory' : 'File';
          } catch (e) {
            return match;
          }
        });
    }
    
    
    // If it's not a string, return it unchanged
   // If it's not a string, return it unchanged
    return text;
  }).join(" "))
   
  
  
  
  if(newLineFlag){
    
  ///  formattedText += "\n" disabled as of rn...
    ///
  }                     
  
  return formattedText
  
};  ///
  
  
    SystemBin.prototype.cp = function (target, destination) {
        if (target === undefined) {
            throw new TypeError("Missing argument: target");
        } else if (destination === undefined) {
            throw new TypeError("Missing argument: destination");
        }
        target = typeof target === "object" ? target : self._resolve_path(target);
        destination = typeof destination === "object" ? destination : self._resolve_path(destination);
        let properties = {
            type: target.type
        };
        if (properties.type === "file") {
            properties.contents = target.contents;
            properties.lastModified = target.lastMoodified;
            properties.size = target.size;
        }
        let node = this.tree.insert(target.key, destination, properties);
        for (let i = 0; i < target.children.length; i++) {
            self.cp(target.children[i], node);
        }
       this._emit('change', {
            type: 'copy',
            path: self._absolute_path(target),
            details: {
                source: target,
                destination: node
            }
        });
        return node;
    };

    SystemBin.prototype.mv = function (target, destination) {
        if (target === undefined) {
            throw new TypeError("Missing argument: target");
        } else if (destination === undefined) {
            throw new TypeError("Missing argument: destination");
        }
        target = typeof target === "object" ? target : self._resolve_path(target);
        destination = typeof destination === "object" ? destination : self._resolve_path(destination);
        this.tree.delete(target);
         this._emit('change', {
            type: 'move',
            path: self._absolute_path(target),
            details: {
                source: target,
                destination: destination
            }
        });
        return self.cp.call(this, target, destination);
    };

      // Method to find all files with a specific tag
    SystemBin.prototype.findFilesByTag = function(tag) {
        if (tag === undefined) {
            throw new TypeError("Missing argument: tag");
        }
        let result = [];
        function search(node) {
            if (node.tags && node.tags.includes(tag) && node.type === 'file') {
                result.push(self._absolute_path(node));
            }
            node.children.forEach(child => search(child));
        }
        search(self.tree.root);
        return result;
    };
  
   // Method to add a tag to a file or directory
    SystemBin.prototype.addTag = function (path, tag) {
        if (path === undefined || tag === undefined) {
            throw new TypeError("Missing argument: path or tag");
        }
        let node = self._resolve_path(path);
        if (!node.tags) {
            node.tags = [];
        }
        if (!node.tags.includes(tag)) {
            node.tags.push(tag);
            this._emit('tagChange', {
                type: 'addTag',
                path: path,
                details: {
                    node: node,
                    tag: tag
                }
            });
        }
    };

    // Method to remove a tag from a file or directory
    SystemBin.prototype.removeTag = function (path, tag) {
        if (path === undefined || tag === undefined) {
            throw new TypeError("Missing argument: path or tag");
        }
        let node = self._resolve_path(path);
        if (node.tags) {
            let index = node.tags.indexOf(tag);
            if (index > -1) {
                node.tags.splice(index, 1);
                this._emit('tagChange', {
                    type: 'removeTag',
                    path: path,
                    details: {
                        node: node,
                        tag: tag
                    }
                });
            }
        }
    };

    // Method to list all tags of a file or directory
    SystemBin.prototype.listTags = function (path) {
        if (path === undefined) {
            throw new TypeError("Missing argument: path");
        }
        let node = self._resolve_path(path);
        return node.tags || [];
    };
  
    SystemBin.prototype.ls = function (path) {
      
     // console.log(path)
        let node = path === undefined ? this.pointer : self._resolve_path(path);
      
       
        if (node.type === "directory") {
            return node.children;
        }
        throw new Error("Not a directory: " + path);
    };
  
  
  SystemBin.prototype.lsRecursive = function (path) {
    let node = self._resolve_path(path);
    if (node.type !== "directory") {
        throw new Error("Not a directory: " + path);
    }

    let results = [];
    function traverse(dir) {
        dir.children.forEach(child => {
            results.push(self._absolute_path(child));
            if (child.type === "directory") {
                traverse(child);
            }
        });
    }
    traverse(node);
    return results;
};


  
  SystemBin.prototype.on = function (event, callback) {
    this.events = this.events || {};
    this.events[event] = this.events[event] || [];
    this.events[event].push(callback);
};

SystemBin.prototype._emit = function (event, data) {
    if (this.events && this.events[event]) {
        this.events[event].forEach(callback => callback(data));
    }
};
  
  SystemBin.prototype.setSizeLimit = function (limit) {
    this.sizeLimit = limit;
};

SystemBin.prototype.checkSizeLimit = function (path) {
    let node = self._resolve_path(path);
    if (node.type === "file" && node.size > (this.sizeLimit || Infinity)) {
        throw new Error("File size exceeds limit: " + path);
    }
};

  
    SystemBin.prototype.whereis = function (query, type) {
    if (query === undefined) {
        throw new TypeError("Missing argument: query");
    }
    let results = this.tree.search(query);
    if (type) {
        results = results.filter(node => node.type === type);
    }
    return results;
};

  
      SystemBin.prototype.source = function (path) {
       // $PS1 ="test"
        return "Not working ATM."
       // need browserify version of bash parser
        const bashSRC =  this.cat("", path, null);
       // console.log(bashSRC)
      
        
        const parsedBash = parseBash(bashSRC)
        
        console.log(parseBashExports(parsedBash))
        
      }
  
    SystemBin.prototype._resolve_path = function (path) {
        path = path.match("^/") ? path : "./" + path;
        path = path.split("/");
        let parent = path[0].length ? this.pointer : this.tree.root;
        for (let i = !path[0].length ? 1 : 0; i < path.length; i++) {
            if (path[i] === "..") {
                if (parent === this.tree.root) {
                    throw new Error( "No more directories beyond root directory.");
                }
                parent = parent.parent;
            } else if (path[i] !== "." && path[i].length) {
                parent = parent.find(path[i], true)[0];
                if (parent === undefined) {
                    throw new Error("Path not found: " + path.slice(0, i + 1).join("/"));
                }
            }
        }
         this._emit('change', {
                type: 'read',
                path: this._absolute_path(parent),
                details: {
                    node: parent,
                }
               
         });
        return parent;
    };
  
   /* SystemBin.prototype._resolve_path = function (path) {
        let segments = path.split("/").filter(Boolean);
        let parent = segments[0] ? this.pointer : this.tree.root;
        for (let segment of segments) {
            if (segment === "..") {
                if (parent === this.tree.root) {
                    throw new Error("No such directory.");
                }
                parent = parent.parent;
            } else if (segment !== ".") {
                let found = parent.find(segment)[0];
                if (!found) {
                    throw new Error("No such file or directory: " + segment);
                }
                parent = found;
            }
        }
        return parent;
    }; */
    

    SystemBin.prototype._absolute_path = function (node) {
        let path = [];
        while (node !== null) {
            path.unshift(node.key);
            node = node.parent;
        }
        return path.join("/");
    };
};

/// System File Tree  

function TreeStructure(vfsCore) {
    this.root = null;
//console.log(vfsCore) 
   
    this.insert = function (key, parent, properties) {
        if(key === ""){
          throw new TypeError("Missing argument: filename");
        }
        if (key === undefined) {
            throw new TypeError("Missing argument: key");
        }
       
      
        parent = parent instanceof TreeNode ? [parent] : this.search(parent);
        let node = new TreeNode(key, properties, vfsCore);
        if (parent === null && !this.root) {
            this.root = node;
        } else if (parent === null && !!this.root) {
            throw new Error("TreeStructure already has a root. Please specify the node's parent.");
        } else if (!parent.length) {
            throw new Error("Parent node not found.");
        } else {
           if(node.key && node.type === "file"){
           isValidFileName(node.key)
         
         //node.key = sanitizeFilename(node.key)
       }
            parent[0].insert(node);
            /* vfsCore._emit('change', {
                type: 'insert',
                path: this._absolute_path(node),
                details: {
                    node: node,
                    parent: parent[0]
                }
            });*/ 
        }
        return node;
    };

    this.delete = function (node) {
        if (node === undefined) {
            throw new TypeError("Missing argument: node");
        }
        let targets = node instanceof TreeNode ? [node] : this.search(node);
        if (targets === null || !targets.length) {
            throw new Error("Target node not found.");
        }
        for (let i = 0; i < targets.length; i++) {
            let target = targets[i];
            if (target === this.root) {
                this.root = null;
            } else {
                target.parent.delete(target);
             /*    vfsCore._emit('change', {
                    type: 'delete',
                    path: this._absolute_path(target),
                    details: {
                        node: target
                    }
                });*/
            }
        }
    };

    this.search = function (key) {
        return key !== undefined && this.root ? this.root.search(key) : null;
    };

    this.traverse = function () {
        if (this.root !== null) {
            let queue = [this.root];
            let levels = [];
            let level = [];
            for (let i = 1, j = 0; queue.length; ) {
                let pointer = queue.shift();
                level.push(pointer);
                j += pointer.children.length;
                if (!--i) {
                    i = j;
                    j = 0;
                    levels.push(level);
                    level = [];
                }
                queue = queue.concat(pointer.children);
            }
            return levels;
        }
        return [];
    };
}  
 ////  
function TreeNode(key, properties, tree) {
    this.key = key;
    this.parent = null;
   this.permissions = properties.permissions || 'rw-'; // Default permissions: read and write

    //const validName = isValidFilename(key)
     //   console.log(validName, key, this.parent)
  
 // console.log(key)
  
    this.children = [];

    properties = properties && typeof properties === "object" ? properties : {};
    for (let i in properties) {
        this[i] = properties[i];
    }

    this.insert = function (child) {
      
        this.children.push(child);
        child.parent = this;
        /*this.tree._emit('change', {
            type: 'insert',
            path: this.tree._absolute_path(child),
            details: {
                node: child,
                parent: this
            }
        });*/ 
    };

    this.delete = function (child) {
        this.children.splice(this.children.indexOf(child), 1);
     /*this.tree._emit('change', {
            type: 'delete',
            path: this.tree._absolute_path(child),
            details: {
                node: child
            }
        });  */
    };

    this.search = function (key) {
        let results = this.key.match("^" + key.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$") ? [this] : [];
        for (let i in this.children) {
            results = results.concat(this.children[i].search(key));
        }
        return results;
    };

    this.find = function (key, folder=false) {
      if(!folder){
      //key =  sanitizeFilename(key)
      }
        let results = [];
        for (let i in this.children) {
            if (this.children[i].key.match( "^" + key.replace(/\./g, "\\.").replace(/\*/g, ".*") + "$")) {
                results.push(this.children[i]);
            }
        }
        return results;
    };
  
  
  /// HELPER FUNCTIONS
  
  function parseBashExports(json) {
  const result = {};

  // Ensure the input is valid
  if (json && json.commands) {
    // Iterate over the commands array
    json.commands.forEach(command => {
      if (command.suffix && command.suffix.length > 0) {
        // Extract the text from the suffix array
        command.suffix.forEach(item => {
          const text = item.text;
          
          // Use a regex to find the variable assignment (e.g., PS1=...)
          const match = text.match(/(\w+)=([^\n]+)/);
          if (match) {
            // Extract the variable name and value
            const variableName = match[1];
            const variableValue = match[2].trim();
            
            // Add to result object
            result[variableName] = variableValue;
          }
        });
      }
    });
  }

  return result;
} 
  

}
const fs = new vfs()

fs.on('change', function (event) {
       // console.log('File system change/ detected:', event);
    });
  
//window.fs = fs // use to access fs in iframe (static directory viewer etc..)

fs.addPlugin('myPlugin', function() {
   return 'My plugin method!'
});
 
let isAudioPlaying = false

// Define command functions
const commands = {
    mkdir: {
        func: (args) => {
            try {
                fs.mkdir(args[0]);
                return "Directory created successfully.";
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: mkdir <directory_name> - Creates a new directory."
    },
sleep: {
    func: async (args) => {
        const timeString = args[0];
        const match = timeString.match(/^(\d+)([smhd]?)$/);
        
        if (!match) {
            return "Error: Invalid time format. Use <number>[s|m|h|d].";
        }
        
        const value = parseInt(match[1], 10);
        const unit = match[2] || 's'; // Default to seconds if no unit is provided

        if (isNaN(value) || value < 0) {
            return "Error: Invalid number.";
        }

        let milliseconds;
        switch (unit) {
            case 'm':
                milliseconds = value * 60 * 1000; // Minutes
                break;
            case 'h':
                milliseconds = value * 60 * 60 * 1000; // Hours
                break;
            case 'd':
                milliseconds = value * 24 * 60 * 60 * 1000; // Days
                break;
            default:
                milliseconds = value * 1000; // Seconds
        }

        try {
            await term.delay(milliseconds);
            return `Slept for ${value} ${unit === 'm' ? 'minutes' : unit === 'h' ? 'hours' : unit === 'd' ? 'days' : 'seconds'} (${milliseconds} milliseconds).`;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: "Usage: sleep <number>[s|m|h|d] - Pauses execution for the specified number of seconds, minutes, hours, or days. Default is seconds."
}, 
    cd: {  //
        func: (args) => {
            try {
              
              if(args.length === 0){
                args = ['/']
              }
              
              if(args && args[0]?.startsWith('~')){
               args[0] = args[0].replace('~', "/");
              }
              
             
              const cwd = fs.pwd()
              
                fs.cd(args[0]);
                if(!piping && cwd != fs.pwd()){
                return `Changed directory to: ${path.basename(fs.pwd())}`;
                  
                  //  `Changed directory to: ${args[0] != "/" ? args[0] : fs.$HOME()}`;
                }
              
                 if(piping){
                  // return args[0] ? args[0] : fs.$HOME() 
                 } 
              
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: cd <directory_name> - Changes the current directory."
    },
    cat: {
        func: async (args) => {
            try {
                let mode;
                let path;
              
              if (args[0]?.trim() === "-n") {
                
                // Display contents of a file with line numbers
let contents = fs.cat("", args[1]);
let lines = contents.split("\n");
 
 
//console.log(lines)                
                
                
lines.forEach((line, index) => {
     term.output(commands.echo.func([`${index + 1} ${line}`]));
  
//return  
});

                return
                
              }
              
              
                if (args[0]?.trim() === ">") {
                    mode = args[0];
                    path = args[1];
                    args.shift()
                } else {
                    mode = "";
                    path = args[0];
                }
               
              args.shift()
               
function isRealItem(item) {
  return (
        item instanceof Blob || 
        item instanceof File || 
      //  Array.isArray(item) || 
       // (typeof item === 'object' && item !== null) || 
        item instanceof Map || 
        item instanceof Set || 
        item instanceof WeakMap || 
        item instanceof WeakSet || 
        item instanceof DataView ||
        (ArrayBuffer.isView(item)) || // Checks for typed arrays
        item instanceof ImageBitmap || 
        item instanceof MediaSource || 
        item instanceof Promise //|| 
      //  typeof item === 'function' ||  // Checks for functions
        //item instanceof Date              // Checks for Date objects
    );
}
               
                let contents;  
              
              //console.log(args)
               if(isRealItem(args[0])) {
                  contents = args[0]
                  }else{
                  contents = args.join(' ')
                  }
                const results = fs.cat(mode, path, contents);
               // console.log(results);
                return results || "File updated successfully.";
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: cat <file_path> [> <output_path>] <contents> - Outputs or updates the content of a file."
    },
    rm: {
        func: (args) => {
          /*
          Here's an example of how to use the `rm` command in a Unix-like environment:

### Usage of `rm`

1. **Remove a Single File**

   To remove a single file named `example.txt`:

   ```bash
   rm example.txt
   ```

2. **Remove Multiple Files**

   To remove multiple files at once, like `file1.txt` and `file2.txt`:

   ```bash
   rm file1.txt file2.txt
   ```

3. **Force Remove a File**

   If you want to remove a file without being prompted for confirmation (use with caution):

   ```bash
   rm -f example.txt
   ```

4. **Remove a Directory**

   To remove an empty directory named `mydir`:

   ```bash
   rmdir mydir
   ```

5. **Remove a Directory and Its Contents**

   To remove a directory and all its contents (files and subdirectories), use the `-r` (recursive) option:

   ```bash
   rm -r mydir
   ```

6. **Force Remove a Directory and Its Contents**

   To forcefully remove a directory and all its contents without confirmation:

   ```bash
   rm -rf mydir
   ```

### Important Note
Be cautious when using `rm -rf`, as it will permanently delete files and directories without any confirmation or ability to recover them. Always double-check the paths before executing.
*/
            try {
              let fileCount;
                args.forEach((arg, index) => { 
    fs.rm(arg); 
    fileCount = args.length; 

});
    return `${fileCount > 1 ? `${fileCount} Files` : 'File'} removed successfully: ${args[0]}`; 
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: rm <...file_path> - Removes a file."
    },
    rmdir: {
        func: (args) => {
            try {
 const vfsContents = fs?.pointer?.children   
  
 const folderName = args[0]
 
 const folder = vfsContents?.find(({ key, type }) => key === folderName && type === 'directory');
 
              //console.log(folder)
              
              if(folder && folder?.children?.length != 0){
                throw new TypeError(`rmdir: failed to remove '${folderName}': Directory not empty`)
              }
                fs.rmdir(folderName);
                return "File removed successfully.";
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: rmdir <dir_path> - Removes a folder."
    },
    rn: {
        func: (args) => {
            try {
                fs.rn(args[0], args[1]);
                return "Renamed successfully.";
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: rn <old_name> <new_name> - Renames a file or directory."
    },
   mv: {
        func: (args) => {
            try {
                fs.mv(args[0], args[1]);
                return "Moved successfully.";
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: mv <target> <path> - Moves a file or directory."
    },
  cp: {
        func: (args) => {
            try {
                fs.cp(args[0], args[1]);
                return "Copied successfully.";
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: cp <target> <path> - Copy a file or directory."
    },
   alias: {
        func: (args, _options) => {
          // this needs a lot of work lol. as well alias set for user (so other users can not use commands. and removal / update of aliases.)
            try {
                if (args.length < 2) {
            return "Error: Not enough arguments. Usage: alias <name> <existing_command>";
        }
                
                   if(commands[args[0]]){
                     return `${args[0]} already exists.`
                   }
                   
                   const name = args[0]
                   args.shift()
                 //  args.join()
                   
                 const alias = args
                   
                   commands[name] = { func: () => processCommand(alias.join(" "), _options), alias:true};  // need to get method for getting args without being split ....
                   
                   
                   
                  // console.log(commands)
                 
               // for future: (if command doesnt exist... and more than 2 args...)
              // //  commands[args[1]] = { func: () => processCommand(args[1]) }; so alias can be done in future with things like alias test ./node/index.js
              
                return `${name} aliased as ${alias.join(" ")}.`;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: alias <name> <existing_command> - Creates a new alias for an existing command"
    },
  unalias: {
    func: (args) => {
        try {
            if (args.length < 1) {
                return "Error: Not enough arguments. Usage: unalias <name>";
            }
            
            const name = args[0];
            
            if (!commands[name]) {
                return `${name} does not exist.`;
            }
          
            if (!commands[name]?.alias === true) {
                return `${name} is not an alias that can be removed.`; // remove this later we will set alias in FS...
            }
            
            delete commands[name];
            
            return `${name} alias removed.`;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: "Usage: unalias <name> - Removes an existing alias"
},
    ls: {
    func: async (args) => {
        try {
            const path = args[0] || '';
            const contents = fs.ls(path);

           
          
              const formattedContents = contents.map(node => {
                const name = node.type === 'directory' 
                    ? `\x1b[34m${node.key}\x1b[0m`  // Blue for directories
                    : `\x1b[35m${node.key}\x1b[0m`; // Pink for files
                return name;
            });

          
          if(args[1] === "-1" ){
             return formattedContents.join("\n")
           }
           /* const rows = [];
            for (let i = 0; i < formattedContents.length; i += 4) {
                rows.push(formattedContents.slice(i, i + 4).join(", "));
            }

            return rows.join("\n") || null;*/
             const Table = (await import("https://esm.sh/cli-table")).default
  
const table = new Table({
       chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': ''
         , 'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': ''
         , 'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': ''
         , 'right': '' , 'right-mid': '' , 'middle': ' ' },
   
 
});
  
 
const chunked = formattedContents.reduce((res, item, idx) => (idx % 4 === 0 ? res.push([item]) : res[res.length - 1].push(item), res), []);

 
 
table.push(...chunked);
return table.toString()
          
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: "Usage: ls [<path>] - Lists files and directories in the specified path or current directory."
},
    whereis: {
        func: (args) => {
            try {
                const query = args[0];
                const results = fs.whereis(query);
               
                return results.map(node => `${node.parent.key}/${node.key}`).join(", ") || null;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: whereis <file_name> - Finds the location of the specified file."
    },
    touch: {
        func: (args) => {
            try {
                const query = args[0];
                const results = fs.touch(query);
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: touch <file_name> - Creates a new file or updates the timestamp of an existing file."
    },
   source: {
        func: (args) => {
            try {
                const query = args[0];
                const results = fs.source(query);
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: touch <file_name> - Creates a new file or updates the timestamp of an existing file."
    },
    du: {
        func: (args) => {
            try {
                const query = args[0];
                const results = fs.du(query);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: du <directory> - Displays disk usage of the specified directory."
    },
  gzip: {
    func: async (args) => {
        const pako = await import('https://esm.sh/pako');
       // const fs = await import('https://jspm.dev/fs');

        if (args.length < 1) {
            return 'Error: Missing input file.';
        }
      
        let decompress = false
        
        if(args[0] === "-d"){
          decompress =  true
        }
      
        if(args[0] != "-d" && args[0] != "-c"){
          return 'Error: Must specify either -c or -d.';
        } 
      
        args.shift()
        
        

        const inputFile = args[0];
        const outputFile = args[1] || `${inputFile}.gz`;

        try {
            const inputBuffer = fs.cat("", inputFile);
            let gzip;
 
 if(!decompress){    
   gzip =  pako.deflate(inputBuffer);
              }
          
  if(decompress){    
gzip = pako.inflate(inputBuffer, { to: 'string' })
              }         
          
                 
         fs.cat(">", outputFile, gzip);
//const restored = JSON.parse(pako.inflate(compressed, { to: 'string' }));
            return `File '${inputFile}' ${decompress ? 'decompressed to' : 'compressed to'} '${outputFile}'.`
        } catch (error) {
            return `Error: Unable to compress file. ${error.message}`;
        }
    },
    help: 'Usage: gzip [-c | -d] <input file> [output file] - Compress or decompress a file using GZIP.'
},
     gunzip: {
        func: async (args) => {
             return await commands.cowsay.func(args, true)
          
          
        },
        help: "Usage: gunzip [-c | -d] <input file> [output file] - Decompress a file using GZIP"
    },
    gzcat: {
        func: async (args) => {
                 const pako = await import('https://esm.sh/pako');
       // const fs = await import('https://jspm.dev/fs');

        if (args.length < 1) {
            return 'Error: Missing input file.';
        }
          
        const content = fs.cat("", args.join(" "))
        
        
        return pako.inflate(content, { to: 'string' })  
          
        },
        help: "Usage: gzcat <file> - View a compressed gzip file."
    },
    df: {
        func: () => {
            try {
                const df = fs.du("/");
              return `
Filesystem  Size Used Avail Use% Mounted on
 ${df}       50G  30G  15G  68%
`  
                
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: du - Displays disk space used and available on filesystem." 
    },
    aplay: {
    func: async (args) => {
        try {
            // Check if the file is provided
            if (args.length === 0) {
                return "Error: File name not provided.";
            }
//
            const file = args[0];
            
          
           if(isAudioPlaying){
             isAudioPlaying?.pause()
            // isAudioPlaying.src =''
           }
            // Create a temporary audio element
            const audio = document.createElement('audio');

            isAudioPlaying = audio
          
            // Check if the file is a URL or a local file
            if (file.startsWith('http')) {
                audio.src = file;
            } else {
                // Assume it's a local file
                const response = fs.cat("", file, null);
                
              
              console.log(response)
               // const blob = "data:audio/wav;base64,"  + response
                
                //const blob =   new Blob([response]);
               // audio.src = blob
                audio.src = URL.createObjectURL(response)
            } 

            // Play the audio
            audio.play();

                      // Set isAudioPlaying to null when done
            audio.onended = () => {
                              URL.revokeObjectURL(audio.src); // Release the object URL
                isAudioPlaying = null;
                audio.remove(); // Remove the element from the DOM
            };
          
          
            // Return a message indicating the file is playing
            return `Playing ${file}...`;
        } catch (error) {
            // Handle any errors that occur during execution
            return `Error: Unable to play file. ${error.message}`;
        }
    },
    help: "Usage: aplay <file> - Plays the specified audio file."
},
    pwd: {
        func: (args) => {
            try {
                const query = args[0];
                const results = fs.pwd(query);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: pwd - Prints the current working directory."
    },
    find: {
        func: (args) => {
            try {
                const query = args[0];
                const results = fs.find(query);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: find <query> - Finds files or directories matching the query."
    },
  timedatectl: {
    func: (args) => {
        try {
            const query = args;
            const results = fs.timedatectl(query);
            return results;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: `Usage: timedatectl <format> - Displays current date and time information.`
},
    date: {
        func: (args) => {
            try {
                const query = args;
                const results = fs.date(query);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: date [<format>] - Displays the current date and time or formats it based on the provided format."
    },
  stats: {
        func: (args) => {
            try {
                const query = args;
                const results = fs.stats(query);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: stats [path] -  Return information about the given file or directory."
    },
    whoami: {
        func: () => {
            try {
                const results = fs.whoami();
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: whoami - Displays the current user."
    },
    echo: {
        func: (text) => {
            try {
                const results = fs.echo(text);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: echo <text> - Prints the provided text."
    },
    printf: {
        func: (args) => {
            try {
                const arg = args[0]
                args.shift();
                const results = printf(arg, args);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: printf <format> <arguments> - Formats and prints the text based on the provided format."
    },
     sprintf: {
        func: (args) => {
            try {
      
               
               // args.pop();
              
            
              
                const results = sprintf(...args);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: sprintf <format> <arguments> - Formats and prints the text based on the provided format."
    },
   vsprintf: {
        func: (args) => {
       
              const msg = args[0]
              
              args.shift()
              
              let argv;
              
              try{
                argv = JSON.parse(args)
              }catch(err){
                throw new TypeError("Arguments provided are invalided array.")
              }
               
               // args.pop();
              
          
              
                const results = vsprintf(msg, argv);
             
                return results;
            
        },
        help: "Usage: vsprintf <string> <arguments> - Formats and prints the text based on the provided arguments as array."
    },
    curl: {
        func: (args) => {
            try {
                const results = fs.curl(args[0], args[1]);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: curl <url> [<options>] - Fetches data from the specified URL with optional settings."
    },
    diff: {
        func: (args) => {
            try {
                const results = fs.diff(args[0], args[1]);
           
              return results.map(part => part.added ? `+${part.value}` : part.removed ? `-${part.value}` : part.value).join('\n');
              
                // Create an array to hold HTML parts
  let html = '';

  // Process each part of the diff
  results.forEach((part, index) => {
    // Determine the color and symbol based on the change type
    const color = part.added ? 'green' :
                  part.removed ? 'red' : 'grey';
    const symbol = part.added ? '+' :
                   part.removed ? '-' : ' ';

    // Add line count if available
    const lineCount = part.count > 0 ? ` (${part.count} lines)` : '';

    // Append formatted HTML for each diff part (needs whitespace fix - since termino applies pre.)
    html += `<span style="color: ${color}; padding: 2px;">
               <span>${symbol}</span>
               <span>${part.value}</span>
               <span style="font-size: smaller; color: #666;">${lineCount}</span>
            </span>`;
  });

  // Return the final HTML string
  return html;
                //return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: diff <file1> <file2> - Compares two files and shows the differences."
    },
    uptime: {
        func: (text) => {
            try {
                const results = fs.uptime(text);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: uptime - Displays the system uptime."
    },
    hostname: {
        func: (text) => {
            try {
                const results = fs.hostname(text);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: hostname - Displays or sets the system hostname."
    },
    myPlugin: {
        func: (text) => {
            try {
                const results = fs.myPlugin(text);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: myPlugin <options> - Executes a custom plugin with the specified options."
    },
    head: {
        func: async (arg) => {
            try {
                const numOfLine = Number(arg[1]) || 10;
             // console.log(numOfLine)
                const results = fs.head(arg[0], numOfLine);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: head <file_path> [<num_of_lines>] - Displays the first few lines of a file. Defaults to 10 lines."
    },
  stat: {
    func: async (arg) => {
        try {
            const stats = fs.stat(arg[0]);
            return stats
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: "Usage: stat <file_path> - Provides the status of a file, including size, creation time, modification time, access time, and change time."
},
    wc: {
        func: async (arg) => {
            try {
                const results = fs.wc(arg[0]);
                return JSON.stringify(results);
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: wc <file_path> - Counts the number of lines, words, and characters in a file."
    },
    ping: {
        func: async (arg) => {
            try {
                const results = await fs.ping(arg[0]);
                return results;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: ping <host> - Sends ICMP ECHO_REQUEST to the specified host."
    },
    cpp: {
    func: (args) => {
      
      
              // Execute C++ / C script from a file
                    const file = args[0];
                    const script = fs.cat('', file, null);
                     
      

        return runCPP(script)
    },
    help: "Usage: cpp [file] - Executes a given C++ / C file."
},
  piston: {
    func: async (args) => {
        const piston = (await import("https://esm.sh/piston-client")).default();
        let language = 'python'; // Default language
        let mode = 'file'; // Default mode
        let script;

        // Process flags
        const handleOptions = () => {
            const langOption = args.find(arg => /^-l/.test(arg));
            if (langOption) {
                language = args[args.indexOf(langOption) + 1] || language;
                args.splice(args.indexOf(langOption), 2);
            }

            const fileModeOption = args.find(arg => /^-f/.test(arg));
            if (fileModeOption) {
                mode = 'file';
                args.splice(args.indexOf(fileModeOption), 1);
            }

            const runModeOption = args.find(arg => /^-r/.test(arg));
            if (runModeOption) {
                mode = 'run';
                args.splice(args.indexOf(runModeOption), 1);
            }
        };

        handleOptions();

        if (mode === 'file') {
            const file = args[0];
            if (!file) {
                return "Error: No file specified for execution.";
            }
            script = await fs.cat('', file, null);
        } else if (mode === 'run') {
            script = args.join(' ');
        }

        try {
            const result = await piston.execute(language, script);
            return result;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: "Usage: piston [-l <language>] [-f <file>] [-r <script>] - Executes code in the specified language. Options:\n -l for language (default: python)\n -f for file mode\n -r for running script directly."
},
  "js": {
    "func": async (args, options = {}) => {
        const { signal } = options;
        let aborted = false;
        let result;
// need to fix abort errors ...
        try {
            if (signal) {
                signal.addEventListener('abort', () => {
                    aborted = true;
                    term.output('Operation aborted: AbortError');
                });
            }

            if (aborted) {
                return 'Operation was aborted.';
            }

           const { Interpreter } = await import("https://esm.sh/eval5")
            const interpreter = new Interpreter(window, { timeout: 1000 });

           let capturedData = {
            log: '',
            warn: '',
            error: '',
            info: '',
            debug: '',
            trace: ''
        };

        // Store the original console methods
        const originalConsole = {
            log: console.log,
            warn: console.warn,
            error: console.error,
            info: console.info,
            debug: console.debug,
            trace: console.trace
        };
          
          function captureConsoleMethod(method) {
            console[method] = function (args) {
              
              if (Array.isArray(args)) {
              
                capturedData[method] += args.map(item => {
  if (typeof item === 'string') {
    return item
  }
  return  JSON.stringify(item, null, 3); // return non-string items unchanged
}).join(" ")  
              }else{
                
                    capturedData[method] +=  JSON.stringify(args)
                
              }
                args = [args]
            
                originalConsole[method].apply(console, args);
                 term.echo(args.join(" "))
                 console[method] = originalConsole[method]
            };
        }
          
          //captureConsoleMethod("log")
          
            const handleOptions = async () => {
                const flag = args[0];
                if (/^-h/.test(flag) || /--help/.test(flag)) {
                    term.output("Usage: js [<options>] <script> - Executes JavaScript code or scripts. Options include -r for running code, -a for interactive mode.");
                    return 'Help information.';
                }
                if (/^-t/.test(flag)) {
                    // -t flag to set a custom timeout
                    const index = args.indexOf(flag);
                    const timeout = parseInt(args[index + 1], 10);
                    interpreter.options.timeout = timeout;
                    args.splice(index, 2); // Remove the -t flag and its argument
                    term.output(`Timeout set to ${timeout} milliseconds.`);
                }
            };

            await handleOptions();

            if (aborted) return 'Operation was aborted.';

          let  exittedREPL;
          
            const flag = args[0];
            if (/^-r/.test(flag)) {
                args.shift(); // Remove the -r flag
                // Execute code snippet
                captureConsoleMethod("log")
                result = interpreter.evaluate(args.join(" "));
            } else if (/^-a/.test(flag)) {
                // Interactive mode
                term.output('Entering interactive mode. Type `exit` to leave.');
                const executeInteractive = async (capturingLogs = false) => {
                   if(!capturingLogs){
                    // captureConsoleMethod("log") this doesn't work.. 
                   }
                    const input = await term.input('js > ');
                    if (input.trim() === 'exit' || aborted) {
                        term.output('Exiting interactive mode.');  
                      exittedREPL = true
                        return;
                    }
                    try {
                       
                        result = interpreter.evaluate(input);
                        if(result != undefined){
                        term.output(result);
                        }
                    } catch (error) {
                        term.output(`Error: ${error.message}`);
                    }
                    // Continue interactive mode
                    await executeInteractive(true);
                };
                await executeInteractive();
            } else {
                // Execute code from a file (simulated here)
                const file = args[0];
                // In a real application, you would load the file contents here
                // const script = await fs.readFile(file, 'utf8');
                const script = "console.log('This is a simulated file read.');"; // Placeholder
                result = interpreter.evaluate(script);
                term.output(result);
            }
  //
          if(!exittedREPL){
            return result
          }
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    "help": "Usage: js [<options>] <script> - Executes JavaScript code or scripts. Options include -r for running code, -a for interactive mode, -t for setting a custom timeout."
  },
  
   phpwasm: {
        func: async (args, options = {}) => {
            const { signal } = options;
            let aborted;
          let php;
          let handleOutput;
          let handleReady;  // 
          let handleError;
            try {
                if (signal) {
                    signal.addEventListener('abort', () => {
                        aborted = true;
                        term.echo('Operation aborted: AbortError');
                        return;
                    });
                }
              
                if (aborted) {
                    return;
                }
                // Dynamically load the Uniter script
               
                 const { PhpWeb } = await import('https://cdn.jsdelivr.net/npm/php-wasm/PhpWeb.mjs');
 php = new PhpWeb;

              
              // Store the event listener functions in variables
handleOutput = (event) => {
  term.echo(event.detail);
};

handleError = (event) => {
 term.output(event.detail);
};



              

                // Option handling using regex
                const handleOptions = async () => {
                    const dOptionMatch = args.find(arg => /^-d/.test(arg));
                    if (dOptionMatch) {
                        const index = args.indexOf(dOptionMatch);
                        args.splice(index, 2); // Remove the -d flag and its argument
                        term.output("PHP configuration options are not fully supported in this simulation.\n");
                    }

                    const iOptionMatch = args.find(arg => /^-i/.test(arg));
                    if (iOptionMatch) {
                        args.splice(args.indexOf(iOptionMatch), 1); // Remove the -i flag
                        term.output("PHP Configuration Info:\n");
                        // Display PHP configuration information (Simulated output)
                        //await php.execute("<?php phpinfo(); ?>");
                        return "Not supported";
                    }

                    const lOptionMatch = args.find(arg => /^-l/.test(arg));
                    if (lOptionMatch) {
                        const index = args.indexOf(lOptionMatch);
                        const file = args[index + 1];
                        args.splice(index, 2); // Remove the -l flag and the file argument
                        // Syntax check the PHP file
                        //await php.execute(`<?php include '${file}'; ?>`);
                        return "Not supported.";
                    }
                };

                const options = await handleOptions();

                if (options) {
                    return options;
                }
              
              async function main(){
                
                      if (/^-r/.test(args[0])) {
                    args.shift(); // Remove the -r flag
                    // Execute PHP code from the command line
                  
                    await php.run(`<?php ${args.join(" ")} ?>`);
                } else if (/^-a/.test(args[0])) {
                    // Enter interactive PHP mode
                    if (args[1] != "RUNNING") {
                        term.output("Entering PHP interactive mode. Type `exit` to leave.\n");
                    }
                    const input = await term.input('php > ');
                    if (input.trim() === 'exit' || aborted) return;
                    await php.run(`<?php ${input} ?>`);
                    // Recursively call the function to continue interactive mode
                    await commands.php.func(['-a', 'RUNNING']);  
                } else {
                    // Execute PHP script from a file
                    const file = args[0];
                    const script = fs.cat('', file, null);
                    
                    //console.log(script)
                    await php.run(script);
                }
              }
              
 handleReady = async () => {
                
                
// Add the event listeners
php.addEventListener('output', handleOutput);
php.addEventListener('error', handleError);


php.inputString('This is a string of data provided on STDIN.');
 
                
  await main();
};
              
                 php.addEventListener('ready', handleReady )
              
              
           
              
             
            } catch (error) {
                return `Error: ${error.message}`;
            }finally{
                 php.removeEventListener('ready', handleReady );
              // Later, to remove the event listeners
php.removeEventListener('output', handleOutput);
php.removeEventListener('error', handleError);
 
              
            }
        },
        help: "Usage: php [<options>] <script> - Executes a PHP script or code. Options include -r for running code, -a for interactive mode."
    },
    php: {
        func: async (args, options = {}) => {
            const { signal } = options;
            let aborted;
            try {
                if (signal) {
                    signal.addEventListener('abort', () => {
                        aborted = true;
                        term.echo('Operation aborted: AbortError');
                        return;
                    });
                }
              
                if (aborted) {
                    return;
                }
                // Dynamically load the Uniter script
                await loadScript('https://unpkg.com/uniter@2.12.1/dist/uniter.js');
              
                // Create a PHP engine instance
                const php = uniter.createEngine('PHP');

                // Set up handlers for stdout and stderr
                php.getStdout().on('data', (text) => term.output(text));
                php.getStderr().on('data', (text) => term.output(text));

                // Option handling using regex
                const handleOptions = async () => {
                    const dOptionMatch = args.find(arg => /^-d/.test(arg));
                    if (dOptionMatch) {
                        const index = args.indexOf(dOptionMatch);
                        args.splice(index, 2); // Remove the -d flag and its argument
                        term.output("PHP configuration options are not fully supported in this simulation.\n");
                    }

                    const iOptionMatch = args.find(arg => /^-i/.test(arg));
                    if (iOptionMatch) {
                        args.splice(args.indexOf(iOptionMatch), 1); // Remove the -i flag
                        term.output("PHP Configuration Info:\n");
                        // Display PHP configuration information (Simulated output)
                        //await php.execute("<?php phpinfo(); ?>");
                        return "Not supported";
                    }

                    const lOptionMatch = args.find(arg => /^-l/.test(arg));
                    if (lOptionMatch) {
                        const index = args.indexOf(lOptionMatch);
                        const file = args[index + 1];
                        args.splice(index, 2); // Remove the -l flag and the file argument
                        // Syntax check the PHP file
                        //await php.execute(`<?php include '${file}'; ?>`);
                        return "Not supported.";
                    }
                };

                const options = await handleOptions();

                if (options) {
                    return options;
                }
                if (/^-r/.test(args[0])) {
                    args.shift(); // Remove the -r flag
                    // Execute PHP code from the command line
                    await php.execute(`<?php ${args.join(" ")} ?>`);
                } else if (/^-a/.test(args[0])) {
                    // Enter interactive PHP mode
                    if (args[1] != "RUNNING") {
                        term.output("Entering PHP interactive mode. Type `exit` to leave.\n");
                    }
                    const input = await term.input('php > ');
                    if (input.trim() === 'exit' || aborted) return;
                    await php.execute(`<?php ${input} ?>`);
                    // Recursively call the function to continue interactive mode
                    await commands.php.func(['-a', 'RUNNING']);
                } else {
                    // Execute PHP script from a file
                    const file = args[0];
                    const script = fs.cat('', file, null);
                    await php.execute(script);
                }
            } catch (error) {
                return `Error: ${error.message}`;
            }
        },
        help: "Usage: php [<options>] <script> - Executes a PHP script or code. Options include -r for running code, -a for interactive mode."
    },
  chatgpt: {
    func: async (args, options = {}) => {
      
      //console.log(args)
      
      function writeFile(filePath, content){
          try{
                    fs.fileExists(args[2])
                    const existingContent = fs.cat(">", filePath,  content);
                  }catch(err){
                    fs.touch(args[2])
                  const existingContent = fs.cat(">", filePath,  content);
                  }
      }
      
        const { signal } = options;
        let aborted;
        try {
            if (signal) {
                signal.addEventListener('abort', () => {
                    aborted = true;
                    term.echo('Operation aborted: AbortError');
                    return;
                });
            }

            if (aborted) {
                return;
            }

            const handleOptions = async () => {
                const dOptionMatch = args.find(arg => /^-d/.test(arg));
                if (dOptionMatch) {
                    const index = args.indexOf(dOptionMatch);
                    args.splice(index, 2);
                    term.output("ChatGPT configuration options are not supported.\n");
                }

                const iOptionMatch = args.find(arg => /^-i/.test(arg));
                if (iOptionMatch) {
                    args.splice(args.indexOf(iOptionMatch), 1);
                    term.output("ChatGPT Configuration Info:\n");
                    return "Not supported.";
                }

                const lOptionMatch = args.find(arg => /^-l/.test(arg));
                if (lOptionMatch) {
                    const index = args.indexOf(lOptionMatch);
                    const file = args[index + 1];
                    args.splice(index, 2);
                    return "File parsing is not supported.";
                }
            };

            const optionsHandled = await handleOptions();
            if (optionsHandled) return optionsHandled;

            if (/^-r/.test(args[0])) {
              // console.log(args)
                args.shift(); // Remove the -r flag
                // Execute code by sending a prompt to ChatGPT
                const response = await sendPrompt(args[0]);
                
              
                if(args[1] === "-o"){
                writeFile(args[2], response)
                   
                }
              
               return response
              
            } else if (/^-a/.test(args[0])) {
                if (args[1] != "RUNNING") {
                    term.output("Entering ChatGPT interactive mode. Type `exit` to leave.\n");
                   term.output(`ChatGPT REPL Started > \n`)
                }
             
                const input = await term.input('');
                if (input.trim() === 'exit' || aborted) return;
              const history = args[2] || []
              
             
              
                const response = await sendPrompt(input, history);

 
 history.push({"role":"user",content:JSON.stringify(input)})              
              history.push({"role":"assistant",content:JSON.stringify(response)})
              
          //    console.log(history)
                term.output(`ChatGPT: ${response}`);
                await commands.chatgpt.func(['-a', 'RUNNING', history]);
            } else {
                const file = args[0];
                const script = fs.cat('', file, null);
                 term.output(`Executing prompt from file: ${file}\n`);
             
                const response = await sendPrompt(script);
                term.output(response);
              
               if(args[1] === "-o"){
                writeFile(args[2], response)
                   
                } 
              
            }

        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: "Usage: chatgpt [<options>] <script> - Executes code or interacts with ChatGPT. Options include -r for running code, -a for interactive mode."
},
   ocr: {
        func: async (args) => {
          
        const Tesseract = await import("https://esm.sh/tesseract.js");
   //       
         // import Tesseract from "https://esm.sh/tesseract.js";

// Function to recognize text from an image file
const recognizeByFile = async (file) => {
  try {
    
    
    const lang = 'eng';
  const langPath = `https://unpkg.com/@tesseract.js-data/${lang}/4.0.0_best_int`;
    
    // Recognize text from the image file
    
       // A worker is created once and used every time a user uploads a new file.  
   const worker = await Tesseract.createWorker(lang, 1, {
      corePath: 'https://unpkg.com/tesseract.js-core@v5',
      workerPath: 'https://unpkg.com/tesseract.js@v5/dist/worker.min.js',
      langPath: langPath,
      logger: function(m){console.log(m);} // Suppress logger output
    });


   const { data } = await worker.recognize(file);
    
    await worker.terminate(); 
    return data.text // return OCR text
  } catch (error) {
    console.error('Error recognizing image:', error);
    return null;
  }
};

// Function to recognize text from an image URL
const recognizeByURL = async (imageUrl) => {
  try {
    // Fetch the image from the URL
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    // Recognize text from the fetched image
    const recognizedText = await recognizeByFile(blob);
    return recognizedText;
  } catch (error) {
    console.error('Error recognizing image from URL:', error);
    return null;
  }
};

// Public API
const OCR = {
  byFile: recognizeByFile,
  byURL: recognizeByURL
};

// Example using image URL
const handleURLInput = async (url) => {
  try {
    const recognizedText = await OCR.byURL(url);
    if (recognizedText !== null) {
     return recognizedText
    } else {
      //document.querySelector("#outputOCRtext").textContent = "Error recognizing text.";
    }
  } catch (error) {
    console.error('Error handling URL input:', error.message);
  }
};
          
          const saveFile = function (filePath, content) {
    try {
        const fileExists = fs.fileExists(filePath);
        if (fileExists) {
          
                fs.cat('>', filePath, content);
                term.output(`File updated: ${filePath}\n`);
           
        } else {
            fs.touch(filePath);
            fs.cat('>', filePath, content);
            term.output(`File created: ${filePath}\n`);
        }
    } catch (err) {
        term.output(err);
    }
};
          
          if(args && args[0] === "file"){
           
          let file =  fs.cat('', args[1], null);
           
           if(!file){
             return 
           } 
            
            
           const mimeType = mimetype.lookup(args[1])
           
           let newFile = file
             
      
      function base64ToBlob(base64String, contentType = '') {
    const byteCharacters = atob(base64String);
    const byteArrays = [];

    for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays.push(byteCharacters.charCodeAt(i));
    }

    const byteArray = new Uint8Array(byteArrays);
    return new Blob([byteArray], { type: contentType });
}
           
            if (mimeType){   
              //newFile = `data:${mimeType};base64,${file}`.trim()
              
            }
           
            
     // file=     base64ToBlob(file, mimeType)
            
            
            //file = stringToBlob(newFile)
            
          // file = Buffer.from(file, 'base64');
            
           const results = recognizeByFile(file)
            
           if(args[2] && args[2] === "o"){
             
             saveFile(args[1], results)
             
           }
           
              return results
           
          }
          
          
          
            if(args && args[0] === "url"){
           
          
           const results = recognizeByFile(args[1])
            
         //  return results
           
           if(args[1] && args[1] === "o"){
             
             saveFile(args[2], results)
             
           }
           
            return results
          }
          
          
        },
        help: "Usage: clear - Clears the terminal screen."
    },
    clear: {
        func: () => {
            term.clear();
        },
        help: "Usage: clear - Clears the terminal screen."
    },
      findColorByHexOrName: {
        func: async (args) => {
            if (args.length < 1) {
                return "Error: Please provide a color hex or name.";
            }

            const { colorNameList } = (await import('https://esm.sh/color-name-list')).default;
            const input = args.join(' ');

            // Check if the input is a hex code or a color name
            let color;
            if (input.startsWith('#')) {
                color = colorNameList.find(color => color.hex.toLowerCase() === input.toLowerCase());
                return color ? `Color name for ${input}: ${color.name}` : `No color found for hex ${input}.`;
            } else {
                color = colorNameList.find(color => color.name.toLowerCase() === input.toLowerCase());
                return color ? `Hex code for ${input}: ${color.hex}` : `No color found for name ${input}.`;
            }
        },
        help: "Usage: findColorByHexOrName <color-hex-or-name> - Finds the color name from a hex code or the hex code from a color name."
    },
     nearestColor: {
        func: async (args) => {
            if (args.length < 1) {
                return "Error: Please provide at least one color value.";
            }

            const nearestColor = (await import("https://esm.sh/nearest-color")).default;
            const inputColors = args.join(' ');
            const colorResult = nearestColor(inputColors);
            return colorResult
        },
        help: "Usage: nearestColor <color> - Finds the nearest color code."
    },
  colorInverter: {
    func: async (args) => {
        const baseColor = args[0] || "#3498db"; // Default to blue
        try {
            const color = Color(baseColor);
            const invertedColor = color.negate().hex();
            return `Inverted color: ${invertedColor}`;
        } catch (error) {
            return `Error inverting color: ${error.message}`;
        }
    },
    help: "Usage: colorInverter <color> - Inverts the provided color."
},
  randomColorGenerator: {
    func: async () => {
        const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        return `Random color: ${randomColor}`;
    },
    help: "Usage: randomColorGenerator - Generates a random hex color."
},
 paletteFromImage: {
    func: async (args) => {
      const vibrant = (await import('https://esm.sh/node-vibrant@3.2.1-alpha.1/dist/vibrant.min.js')).default;
        let imagePath = args[0];
        if (!imagePath) return "Please provide an image path.";  

        imagePath = fs.cat("", imagePath)
      
      function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            resolve(reader.result); // This will be the Base64 string
        };
        reader.onerror = reject; // Handle errors
        reader.readAsDataURL(blob); // Convert blob to Base64
    });
}
      
        try {
          imagePath = await blobToBase64(imagePath)
            const palette = await vibrant.from(imagePath).getPalette();
            const colors = Object.entries(palette).map(([key, swatch]) => `${key}: ${swatch.hex}`).join('\n');
            return `Palette:\n${colors}`;
        } catch (error) {
            return `Error generating palette: ${error.message}`;
        }
    },
    help: "Usage: paletteFromImage <image-path> - Generates a color palette from the specified image."
},
  colorShadesGenerator: {
    func: async (args) => {
        const baseColor = args[0] || "#3498db"; // Default to blue
        const shades = [];
        
        try {
            const color = Color(baseColor);
            for (let i = 1; i <= 5; i++) {
                shades.push(color.darken(i * 0.1).hex());
                shades.push(color.lighten(i * 0.1).hex());
            }
            return `Shades: ${shades.join(', ')}`;
        } catch (error) {
            return `Error generating shades: ${error.message}`;
        }
    },
    help: "Usage: colorShadesGenerator <color> - Generates a series of shades from the provided color."
},
  colorPalette: {
    func: async (args) => {
        const baseColor = args[0] || "#3498db"; // Default to a blue color
        try {
            const color = Color(baseColor);
            const palette = {
                base: color.hex(),
                lighter: color.lighten(0.2).hex(),
                darker: color.darken(0.2).hex(),
                complementary: color.rotate(180).hex(),
                analogous1: color.rotate(30).hex(),
                analogous2: color.rotate(-30).hex()
            };

               // Displaying the color palette using chalk
      const displayPalette = (palette) => {
    return (
        chalk.hex(palette.base).bgBlack(' Base: ' + palette.base + ' ') + '\n' +
        chalk.hex(palette.lighter).bgBlack(' Lighter: ' + palette.lighter + ' ') + '\n' +
        chalk.hex(palette.darker).bgBlack(' Darker: ' + palette.darker + ' ') + '\n' +
        chalk.hex(palette.complementary).bgBlack(' Complementary: ' + palette.complementary + ' ') + '\n' +
        chalk.hex(palette.analogous1).bgBlack(' Analogous 1: ' + palette.analogous1 + ' ') + '\n' +
        chalk.hex(palette.analogous2).bgBlack(' Analogous 2: ' + palette.analogous2 + ' ')
    );
};
          
          
          if(args[1] === "-display"){
            return displayPalette(palette)
          }
          
          return JSON.stringify(palette, null, 2);
          
        } catch (error) {
            return `Error generating palette: ${error.message}`;
        }
    },
    help: "Usage: colorPalette <color> <options> - Generates a color palette based on the provided color.\n Options:\n -display - display the color pallete."
},
  chalk: {
        func: async (args) => {
          const chalk = (await import("https://esm.sh/chalk")).default;
          chalk.level = 3
          const method = args[0]
          args.shift() 
          console.log(args)
          return chalk[method](args.join(" "))
        },
        help: "Usage: chalk <method> [text] - Applies a chalk method to the provided text."
    },
   tr: {
    func: (args) => {
        if (args.length < 2) {
            return 'Usage: tr [set1] [set2] - Translates characters from set1 to set2.';
        }

        let set1 = args[0];
        let set2 = args[1];

        if (set1.length!== set2.length) {
            return 'Error: Sets must be of the same length.';
        }

        let input = '';
        for (let i = 2; i < args.length; i++) {
            input += args[i] + ' ';
        }

        let output = '';
        for (let i = 0; i < input.length; i++) {
            let index = set1.indexOf(input[i]);
            if (index!== -1) {
                output += set2[index];
            } else {
                output += input[i];
            }
        }

        return output.trim();
    },
    help: 'Usage: tr [set1] [set2] - Translates characters from set1 to set2.'
},
   tree: {
        func: async (args) => {
             return fs.displayTree(args.join(" "))
        },
        help: "Usage: tree [dir] - Display the directory structure of a given path in a tree format."
    },
      tag: {
        func: async (args) => {
          // Example usages:

// Add a tag to a file
// tag --path /documents/report.txt --add important

// Remove a tag from a file
// tag --path /documents/report.txt --remove work

// List tags for a file
// tag --path /documents/report.txt --list

// Error: Missing --path argument
// tag --add important

// Error: Cannot use both --add and --remove flags at the same time
// tag --path /documents/report.txt --add important --remove work

// Error: You must specify one of --add, --remove, or --list
// tag --path /documents/report.txt
            // Parse arguments and flags
            const options = {
                add: false,
                remove: false,
                list: false
            };
            const parsedArgs = args.filter(arg => arg.length > 0);
            const pathIndex = parsedArgs.indexOf('--path');
            const tagIndex = parsedArgs.indexOf('--tag');
            const addIndex = parsedArgs.indexOf('--add');
            const removeIndex = parsedArgs.indexOf('--remove');
            const listIndex = parsedArgs.indexOf('--list');

            if (pathIndex > -1) {
                options.path = parsedArgs[pathIndex + 1];
            } else {
                throw new Error("Missing --path argument.");
            }

            if (addIndex > -1) {
                options.add = true;
                options.tag = parsedArgs[addIndex + 1];
            }

            if (removeIndex > -1) {
                options.remove = true;
                options.tag = parsedArgs[removeIndex + 1];
            }

            if (listIndex > -1) {
                options.list = true;
            }

            if (options.add && options.remove) {
                throw new Error("Cannot use both --add and --remove flags at the same time.");
            }

            if (options.add) {
                // Add tag
                fs.addTag(options.path, options.tag);
                return `Tag '${options.tag}' added to ${options.path}.`;
            }

            if (options.remove) {
                // Remove tag
                fs.removeTag(options.path, options.tag);
                return `Tag '${options.tag}' removed from ${options.path}.`;
            }

            if (options.list) {
                // List tags
                const tags = fs.listTags(options.path);
                return `Tags for ${options.path}: ${tags.join(', ')}`;
            }

            throw new Error("You must specify one of --add, --remove, or --list.");
        },
        help: "Usage: tag --path <path> [--add <tag> | --remove <tag> | --list] - Manage tags for files and directories."
    },
  
   time: {
    func: async (args) => {
      
        if(args.length < 1){
          throw new TypeError("A command must be provided to run using the time command.")
        }
        const startTime = performance.now(); // Start timing
        
        // Execute the command and await its result
        const result = await processCommand(args.join(" "));

        const endTime = performance.now(); // End timing
        const elapsedMilliseconds = endTime - startTime;

        // Convert elapsed time into days, hours, minutes, and seconds
        const elapsedSeconds = elapsedMilliseconds / 1000;
        const days = Math.floor(elapsedSeconds / (24 * 3600));
        const hours = Math.floor((elapsedSeconds % (24 * 3600)) / 3600);
        const minutes = Math.floor((elapsedSeconds % 3600) / 60);
        const seconds = (elapsedSeconds % 60).toFixed(3); // Show milliseconds in seconds

        // Format the output in a combined style
        return `
Command Result:
${result}

Elapsed Time:
  real    ${days}d ${hours}h ${minutes}m ${seconds}s
  user    0m 0.000s
  sys     0m 0.000s
`;
    },
    help: "Usage: Executes a command and returns the result along with the time taken in days, hours, minutes, and seconds."
},
    awk: {
    func: async (args) => {
        if (args.length < 2) {
            return 'Usage: awk "<script>" "<input>" - Processes input string using the specified AWK script.';
        }

        const { awkjs } = await import("https://esm.sh/awkjs");
        const { awk } = await awkjs();

        const script = args[0];  // The AWK script
        const input = args[1];   // The input string to process

        // Run the AWK script
        const output = awk(input, script, []);

        // Check if there's an error in stderr
        if (output.stderr) {
            return `Error: ${output.stderr}`;
        }

        // Return the result from stdout
        return output.stdout || 'No output produced.';
    },
    help: "Usage: awk \"<script>\" \"<input>\" - Processes input string using the specified AWK script."
},
  jq: {
    func: async (args) => {
        if (args.length < 2) {
            return 'Usage: jq "<filter>" "<json>" - Applies the jq filter to the provided JSON input.';
        }

        const jq = (await import("https://esm.sh/jq-web")).default;

        try {
            let jsonInput;
          const options = {
            raw:false
          }
          
          if(args[0] === "-r"){
            args.shift()
            options.raw = true
          }
          
        //  console.log(jq)
                      // Check if the input is a file path or JSON string
            if (args[1].startsWith('{') || args[1].startsWith('[')) {
              
                // Treat as JSON string
                if(!options.raw){
                jsonInput = args[1];
                }else{
                  jsonInput = JSON.parse(args[1])
                }
            } else {
                // Assume it's a file path
               
                const fileContent = await fs.cat(">", args[1]);
                jsonInput = JSON.parse(fileContent);
            }
            const filter = args[0];  // The jq filter

 
            // Process the JSON input with the filter
            let result;
          
          if(!options.raw){
           result = await jq.promised.raw(jsonInput, filter);
           
          }
          
          if(options.raw){
            result = await jq.promised.json(jsonInput, filter)
          }

          
            return  result   
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: 'Usage: jq "<filter>" "<json>" - Applies the jq filter to the provided JSON input.'
},
  ift: {
    func: async (args) => {
        const commands = {};
        let currentCommand = 'if';

        for (let i = 0; i < args.length; i++) {
            if (args[i] === 'if') {
                currentCommand = 'if';
            } else if (args[i] === 'then') {
                currentCommand = 'then';
            } else if (args[i] === 'else') {
                currentCommand = 'else';
            } else {
                if (!commands[currentCommand]) {
                    commands[currentCommand] = [];
                }
                commands[currentCommand].push(args[i]);
            }
        }

        let condition = commands.if.join(' ');
        let thenCmd = commands.then? commands.then.join(' ') : '';
        let elseCmd = commands.else? commands.else.join(' ') : '';
 
        condition = await processCommand(`expr ${condition}`)      
      
     
      
      if(condition === "false"){
        condition = null
      }
      
      if(condition === "true"){
        condition = true
      }
      
        try {
            if (condition) {
                return await processCommand(thenCmd);
            } else {
                return await processCommand(elseCmd);
            }
        } catch (error) {
            return `Error: Invalid condition ${condition}.`;
        }
    },
    help: 'Usage: ift if <condition> then <command> [else <command>] - Executes a command based on a condition.'
},
  atoi: {
    func: (args) => {
      if (args.length !== 1) {
        return 'Usage: atoi <string> - Converts a string to an integer.';
      }

      let str = args[0];
      let num = 0;
      let sign = 1;

      if (str[0] === '-') {
        sign = -1;
        str = str.slice(1); // Remove the sign from the string
      }

      for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
          num = num * 10 + parseInt(str[i]);
        } else {
          return 'Error: Invalid input. Please provide a valid string representation of an integer.';
        }
      }

      return num * sign;
    },
    help: 'Usage: atoi <string> - Converts a string to an integer.'
  },
  playanimation:{
  func: (args) => {  
    // Initialize options object
    let options = {
      async: false, // Default to synchronous
      timeToChange: 100, // Default time for changing ASCII art
      infiniteLoop: false, // Default to no infinite loop
    };

    // Function to parse flags from args
    function parseFlags(args) {
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '--async') {
          options.async = true;
        } else if (args[i] === '-T' && args[i + 1]) {
          options.timeToChange = parseInt(args[++i], 10);
        } else if (args[i] === '-i') {
          options.infiniteLoop = true;
        } else {
          // Assuming remaining args are ASCII art lines
          options.asciiArtList = options.asciiArtList || [];
          options.asciiArtList.push(decode(args[i].trim()));
        }
      }
    }

    parseFlags(args);

    // Ensure we have ASCII art to play
    if (!options.asciiArtList || options.asciiArtList.length === 0) {
      console.error("No ASCII art provided.");
      return;
    }

    function generateRandomId() {
      return 'ascii-ani-' + Math.random().toString(36).substr(2, 9);
    }

    function playAsciiArt(asciiArtList, infiniteLoop, timeToChange) {
      return new Promise((resolve) => {
        let asciiArtIndex = 0;
        let asciiArt = document.createElement('div');
        let randomId = generateRandomId();
        asciiArt.id = randomId; // Assign random ID
        asciiArt.innerHTML = asciiArtList[asciiArtIndex];

        let typewriterEl = document.querySelector(".termino-console");

        const observer = new MutationObserver(() => {
          typewriterEl = document.querySelector(".termino-console");
          asciiArt = document.querySelector(`#${randomId}`); // Use random ID to find element
        });

        observer.observe(document.body, { childList: true, subtree: true });

        typewriterEl.appendChild(asciiArt);
        
        const asciiArtInterval = setInterval(() => {
          asciiArtIndex++;
          if (asciiArtIndex >= asciiArtList.length) {
            if(options.async && infiniteLoop){
             asciiArtIndex = 0;  // play only once when async - then when animation done continue..
             resolve()
            }
            
            if (infiniteLoop) {
              asciiArtIndex = 0;
            } else {
              asciiArtIndex = asciiArtList.length - 1;
              clearInterval(asciiArtInterval);
              observer.disconnect();
              resolve(); // Resolve the promise when done
            }
          }
          try{
          asciiArt.innerHTML = asciiArtList[asciiArtIndex];
          }catch(err){
           // Terminal was probably cleared..
          clearInterval(asciiArtInterval);
          observer.disconnect();
              resolve(); // Resolve 
            
          }
            
        }, timeToChange);
      });
    }

    if (options.async) {
      // Return a promise to be resolved when the animation is complete
      
      
      
      return playAsciiArt(options.asciiArtList, options.infiniteLoop, options.timeToChange)
       .catch((err) => console.error('Error during animation:', err)); 
    } else {
      // Run synchronously
            // Run synchronously
      playAsciiArt(options.asciiArtList, options.infiniteLoop, options.timeToChange)
        .catch((err) => console.error('Error during animation:', err));
    }
  },
  help: "Usage: playanimation [flags] [args] - Animates ASCII art.\n" +
        "Flags:\n" +
        "  --async          Run the animation asynchronously.\n" +
        "  -T <time>        Time (in milliseconds) to change ASCII art.\n" +
        "  -i               Enable infinite loop.\n" +
        "Args:\n" +
        "  ASCII art lines to be animated."
},
  /* playanimation: {
  func: (args) => {
         function generateRandomId() {
      return 'ascii-ani-' + Math.random().toString(36).substr(2, 9);
    }

    function playAsciiArt(asciiArtList, infiniteLoop, timeToChange) {
      var asciiArtIndex = 0;
      let asciiArt = document.createElement('div');
      let randomId = generateRandomId();
      asciiArt.id = randomId; // Assign random ID
      asciiArt.innerHTML = asciiArtList[asciiArtIndex];

      let typewriterEl = document.querySelector(".termino-console");

      const observer = new MutationObserver(() => {
        typewriterEl = document.querySelector(".termino-console");
        asciiArt = document.querySelector(`#${randomId}`); // Use random ID to find element
      });

      observer.observe(document.body, { childList: true, subtree: true });

      typewriterEl.appendChild(asciiArt);
      
      var asciiArtInterval = setInterval(function() {
        asciiArtIndex++;
        if (asciiArtIndex >= asciiArtList.length) {
          if (infiniteLoop) {
            asciiArtIndex = 0;
          } else {
            asciiArtIndex = asciiArtList.length - 1;
            clearInterval(asciiArtInterval);
            // Stop the observer when done
            observer.disconnect();
          }
        }
        asciiArt.innerHTML = asciiArtList[asciiArtIndex];
      }, timeToChange);
    }
    
    playAsciiArt(args, false, 100);
  },
  help: "Usage: playanimation [args] - Animates ASCII art."
},*/
   fold: {
        func: async (args) => {
        if(args.length < 1){
          return "Error: Not enough arguments. Usage: wordbreak [string] [length=72]";
        }  
          
        const str = args[0]
        const len = args[1] || 72
        const words = str.split(' ');
        let currentLine = '';
        let lines = [];

        for (const word of words) {
            if ((currentLine + ' ' + word).length <= len) {
                currentLine += (currentLine ? ' ' : '') + word;
            } else {
                lines.push(currentLine);
                currentLine = word;
            }
        }

        if (currentLine) {
            lines.push(currentLine);
        }

        return lines.join('\n');
        },
        help: "Usage: fold [string] [length=72] - Breaks a long string into multiple lines with a specified maximum length."
    },
   isHostname: {
        func: (args) => {
              if(args.length < 0){
                return 'No '
              }
               const hostnameRegex = /^[^:/\s.#?]+\.[^:/\s#?]+|localhost$/;
        return hostnameRegex.test(args.join(" "));
        },
        help: "Usage: isHostname <string> - Checks if provided string is a hostname."
    },
     isValidIPv4: {
        func: (args) => {
              if(args.length < 0){
                return 'No '
              }
          
       const ip = args[0]   
       if(!ip.includes(".")){
         return "false"
       }
        const blocks = ip.split('.');
        if (blocks.length !== 4) {
            return "false";
        }
        for (const block of blocks) {
            const numericBlock = parseInt(block, 10);
            if (!(numericBlock >= 0 && numericBlock <= 255)) {
                return "false";
            }
        }
        return true;
        },
        help: "Usage: isValidIPv4 [ip] - Checks if is valid IPv4."
    },
   isValidIPv6: {
        func: (args) => {
              if(args.length < 0){
                return 'No '
              }
          
       const ip = args[0]   
       
       if(!ip.includes(":")){
         return "false"
       }
       
        const blocks = ip.split(':');
        if (blocks.length < 8) {
            return "false";
        }
        for (const block of blocks) {
            if (!/^[0-9A-Fa-f]{1,4}$/.test(block)) {
                return "false";
            }
        }
        return true;
        },
        help: "Usage: isValidIPv6 [ip] - Checks if is valid IPv6."
    },
   isValidIP: {
        func: (args) => {
              if(args.length < 1){
                return 'No '
              }
    
          
     let IPCheck = commands.isValidIPv4.func(args) 
     
     if(IPCheck != "false"){
       return IPCheck
     }
     
     IPCheck = commands.isValidIPv6.func(args);
          
      
     return IPCheck
     
        },
        help:  "Usage: isValidIP [ip] - Checks if is valid IP (IPv6 or IPv4)."
    },
     rand: {
        func: async (args) => {
              
              const options = {
                
              }
          
              if(args[0]){
                
                if(args[0].startsWith('--seed=')){
                  options.seed = args[0].replace('--seed=', '')
                  args.shift()
                }
                
                  if(args[0].startsWith('--count=')){
                  options.count = args[0].replace('--count=', '')
                    args.shift()
                }
                
              }
              
              
          function rand(min = 0, max = 1, options = {}) {
    const { seed, count = 1 } = options;
    
    // Seeded random number generator (if seed is provided)
    let random = seed ? mulberry32(seed) : Math.random;
    
    const results = [];
    for (let i = 0; i < count; i++) {
        // Generate a random number between min and max (inclusive)
        const randNum = Math.floor(random() * (max - min + 1)) + min;
        results.push(randNum);
    }

    // Return single value if count is 1, else return array of numbers
    return count === 1 ? results[0] : results;
}

// Seeded random number generator (Mulberry32 algorithm)
function mulberry32(seed) {
    return function() {
        let t = (seed += 0x6D2B79F5);
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
}
          
          let vals = {
            min:Number(args[0]) || 0,
            max:Number(args[1]) || 1
          }
          
          return rand(vals.min, vals.max, options)
          
        },
        help: "Usage: rand [min] [max] [--seed=seed] [--count=count] - Generates random numbers between min and max. Seed and count are optional."
    },
     peerjs: { 
    func: async (args, options={}) => {
      
     if (args.length < 1) {
                return `Error: Not enough arguments. ${commands.peerjs.help}`;
       }
      
      const { signal } = options;
        const { Peer } = await import("https://esm.sh/peerjs");
//
        let peer = new Peer(); 
        let serverClosed = false;
        let serverBased = false;
       let deferred = {
            promise: null,
            resolve: null,
        };

        // Initialize the deferred object
        deferred.promise = new Promise((resolve) => {
            deferred.resolve = resolve;
        });
      
      
      // Handle abort from signal when serving.
        function onAbort(){
            
                term.echo('Operation aborted: AbortError');
            serverClosed = true;
              peer.destroy();
   signal.removeEventListener('abort', onAbort);
                    deferred.resolve();
          }
        

        // Handle user input for sending data
        const handleInput = async (conn) => {
            const inputListener = async () => {
                try {
                    const input = await term.input('');
                    if (input.trim() === '/exit') {
                    
                        conn.send(input)
                        peer.destroy();  // Close the peer connection
                        serverClosed = true;
                    } else if (conn && conn.open) {
                        conn.send(input);
                    } else {
                        console.log("No active connection to send data.");
                    }
                    // Continue listening for more input
                    if (!serverClosed) {
                        await inputListener();
                    }
                } catch (err) {
                    console.error("Error handling input for PeerJS Termino:", err);
                }
            };

            // Start listening for input
            await inputListener();
        };

      
        if (args[0] === "-c") {
            let peerId; // cant set right now 
           if(!peerId){
           peerId = await term.input("Enter ID to connect: "); 
           } 
          
          peerId = peerId.trim()
          
         
          
          
            const conn = peer.connect(peerId);

            let clientConnected = false;  
/// handle timeouts..
/*setTimeout(() => {
  if (!clientConnected) {
        serverClosed = true;
            term.output('Failed to connect.');
              peer.destroy();
            if (deferred.resolve) {
                deferred.resolve();
            }
  }
}, 10000); // 10 seconds = 10000 milliseconds
          */
           peer.on('error', (err) => {
            serverClosed = true;
            term.output(err.message);
              peer.destroy();
            if (deferred.resolve) {
                deferred.resolve();
            }
        });
          
                    // Handle server closed event
        peer.on('disconnected', () => {
           if(serverClosed && clientConnected){
             term.output("Error: Server disconnected.");
           }
            serverClosed = true;
            
           peer.destroy();
            if (deferred.resolve) {
                deferred.resolve();
            }
        });
          
            conn.on("open", async () => {
                clientConnected = true
                term.output("Connection initated.");
                conn.send({ status:"OPEN", fingerprint:fingerprint(), id:conn.peer});
                
                await handleInput(conn);
                
                
            });

            conn.on("data", async (data) => {
               term.output(data)
            });

            conn.on("close", () => {
                term.output("Connection closed to server.");
                serverClosed = true;
               peer.destroy();
                  if (deferred.resolve) {
                deferred.resolve();
            }
            });
          
        

        } else if (args[0] === "-s") {
            

             peer.on('error', (err) => {
            serverClosed = true;
            term.output(err.message);
            peer.destroy();
            if (deferred.resolve) {
                deferred.resolve();
            }
               
        });
          
           peer.on("open", (id) => {
                term.output(`Server is running with ID: ${id}`);
            });
          
           
          peer.on('disconnected', () => {
               if(!serverClosed){
                  term.output("Server connection closed, closing server.");
               }
                serverClosed = true;
               
                peer.destroy();
                deferred.resolve();
            }); 
          
             
          
            peer.on('close', () => {
              if(!serverClosed){
                  term.output("Server closed.");
               }
                serverClosed = true;
                //term.output("Server disconnected.");
                peer.destroy();
                deferred.resolve()
            });
            
               peer.on("connection", (conn) => {
                conn.on("data", async (data) => {
                  
                  
                  
                  if(data && data?.status === "OPEN"){
                    term.output(`New connection open: ${data.id}\n${formatJson(data.fingerprint)}`)
                  }
                  
                  
                  
                  
                  
                  if(data === "/exit"){
                     peer.destroy();
                     deferred.resolve()
                     return;
                  }
                  
                     const result = await processCommand(data);
              //console.log(result)
              conn.send(result)
                });

                conn.on("close", () => {
                    peer.destroy();
                    deferred.resolve();
                });
            });
          
        
        
          
               if (signal) {
    signal.addEventListener('abort', onAbort);
}
          
          
        }
        // Wait for server to close (side that created ID) or be exited by user (user side).
           await deferred.promise;
      
        if(signal){
           signal.removeEventListener('abort', onAbort);
        }
      
    },
    help: "Usage: peerjs [<options>] - Serve or connect to a PeerJS instance.\n  -c <ID> - Connect to a peer with the given ID.\n  -s - Start a peer server."
},
     setfont: {
        func: async (args) => {
          
          // Example usage:
// commands.setfont.func(['Arial', 'size=16px']);
// commands.setfont.func(['Arial', '--help']);
            // Default values
            let fontName = null;
            let options = {};
            
            // Parse arguments
            for (const arg of args) {
                if (arg.startsWith('--')) {
                    // Handle flags
                    const flag = arg.substring(2);
                    if (flag === 'help') {
                        console.log("Usage: setfont [fontname] [options]\nOptions:\n  --help       Show this help message");
                        return;
                    }
                } else if (arg.includes('=')) {
                    // Handle key=value options
                    const [key, value] = arg.split('=');
                    options[key] = value;
                } else {
                    // Assume it's the font name
                    fontName = arg;
                }
            }
            
            // Check if a font name is provided
            if (!fontName) {
                console.log("Error: No font specified.");
                return;
            }
            
            // Apply the font to the body or a specific element
            document.body.style.fontFamily = fontName;
            
            // Handle additional options (e.g., font size)
            if (options.size) {
                document.body.style.fontSize = options.size;
            }

            // Notify the user
            console.log(`Font set to ${fontName}${options.size ? ` with size ${options.size}` : ''}`);
        },
        help: "Usage: setfont [fontname] [options] - Sets the font of the text in the document.\nOptions:\n  --help       Show this help message\n  size=value   Set font size (e.g., size=16px)"
    },
  
webview: { 
    func: async (args, _options) => {
        const { signal } = _options;
      
   const options = {
     mode:"local",
     args:[]
   }   
     
   function openTextWindow(rawText, title) {
    // Open a new window
    const newWindow = window.open('', 'width=600,height=400');

    // Check if the window was successfully opened
    if (newWindow) {
        // Write the raw text to the new window
        newWindow.document.write(`
            <html>
                <head>
                    <title>${title}</title>
                    <style>
                        body { font-family: monospace; white-space: pre; }
                    </style>
                </head>
                <body>
                    <pre>${rawText}</pre>
                </body>
            </html>
        `);
        newWindow.document.close(); // Close the document to render it
    } else {
        term.output('Failed to open new window. Please check your popup settings.');
    }
}
          // Function to parse flags from args
    function parseFlags(args) {
      for (let i = 0; i < args.length; i++) {
      if (args[i] === '-u') {
          options.mode = "URL"
        } else {
          options.args.push(args[i])
        }
      }
    }
      
      parseFlags(args)
      
        const editor = document.querySelector('#editor');
        editor.classList.remove('hidden');

        editor.classList.add('active', 'webview')
      
      const termbody = document.querySelector('#terminal-body');
        termbody.classList.add('hidden');
        let iframe = document.querySelector('#content-frame');
      let nameSpan;
      let externalSpan;
       // Function to create and append elements
       function appendElements() {
    // Create the 'title' div
    var titleDiv = document.createElement('div');
    titleDiv.id = 'title';

    // Create and append the 'close' span
    var closeSpan = document.createElement('span');
    closeSpan.id = 'close';
    closeSpan.innerHTML = '&times;';
    titleDiv.appendChild(closeSpan);

        // Define the event handler function
    function handleCloseClick() {
       editor.classList.remove('active', 'webview');

        editor.classList.add('hidden')
      termbody.classList.remove('hidden')
         titleDiv.remove();
        iframe.remove(); // Remove the entire 'title' div when 'close' is clicked
      
      // signal.removeEventListener('abort',handleCloseClick);
       window.sharedData = null; 
      
        closeSpan.removeEventListener('click', handleCloseClick); // Remove the event listener
       externalSpan.addEventListener('click', handleExternalClick);      
    }

         
         
    // Add event listener to the 'close' span
    closeSpan.addEventListener('click', handleCloseClick);     
        
         
   
         
  
    //signal.addEventListener('abort',handleCloseClick); if we resolve this as promise?
    
         
    // Create and append the 'name' span
    nameSpan = document.createElement('span');
    nameSpan.id = 'name';
    nameSpan.textContent = 'Loading'; // Use textContent for plain text
    titleDiv.appendChild(nameSpan);

    // Create and append the 'external' span
    externalSpan = document.createElement('span');
    externalSpan.id = 'external';
    externalSpan.innerHTML = '<i class="fa fa-external-link"></i>';
    titleDiv.appendChild(externalSpan);

         
               
         
     
               
           
         
    // Create and append the 'url' span
    var urlSpan = document.createElement('span');
    urlSpan.id = 'url';
    titleDiv.appendChild(urlSpan);

    // Append the 'title' div to the body or another container
    editor.appendChild(titleDiv); // Change this line to append to a specific container if needed
}


      
      appendElements()
      
     
     
      
        if (iframe) {
            iframe.remove(); // Remove the iframe from the DOM
        }
        // Create an iframe element
        iframe = document.createElement('iframe');
        iframe.id = 'content-frame'; // Assign an ID to the iframe for easier reference
        iframe.style.width = '100%'; // Set the width of the iframe
        iframe.style.height = '400px'; // Set the height of the iframe
//
       
        //iframe.srcdoc = content;
  
      let content = options.args.join(" ")
      
        if(options.mode === "URL"){
          
          iframe.src = content
          
        }
      
           function handleExternalClick(){
           if(options.mode === "URL"){
             window.open(content);
             
           }
            if(options.mode != "URL"){
             openTextWindow(content, nameSpan.textContent)   
           }
         }
     // Add event listener to the 'external' span
    externalSpan.addEventListener('click', handleExternalClick); 
      
      
        if(options.mode != "URL"){
         
        if(!fs.fileExists(content)){
    throw new TypeError(`${content} does not exists`)
        }  
          
       window.sharedData = {
        fs:fs
         };
        }
      
      
       
      
      
        // Append the iframe to the editor
        editor.appendChild(iframe);
      
   
      
      iframe.onload = function() {
    var iframe = this;
    let iframeDocument;
        try{
       iframeDocument = iframe?.contentWindow?.document;
        }catch{
          
        }
  
  if(options.mode === "URL"){
       nameSpan.textContent = iframeDocument?.title || options.args.join(" ")
  }   
        
  if(options.mode != "URL"){
       nameSpan.textContent = iframeDocument?.title || "Unknown"
  }         
        

        
};
      
        if(options.mode != "URL"){
           // Set the iframe content from a string
        const content = fs.cat("", options.args.join(" ")); // Join the arguments as a string
      var printDocument =  iframe.contentDocument || iframe.contentWindow.document;
    printDocument.write(content)  
    }
      
        
      
    },
     
    help: "Usage: webview <HTML content> - Creates an iframe with the given content."
},
  npm: {
        func: async (args) => {
              if(args.length < 0){
                throw new Error("")
              }
          
              if(args[0] === "link"){
              let content =   fs.cat("", "package.json", null)
              
              content = JSON.parse(content)
              
                const script = String(`${fs.pwd().replace(fs.$HOME(), '')}/${content.main}`)
                
                if(commands[content.name]){
                    return `npm WARN EEXIST: command already exists.`
                //  return `npm WARN EEXIST: file already exists, /usr/local/bin/ls`
                }
                
                
                 commands[content.name] = { func: async (argVal) => await processCommand(`node ${script} ${argVal.join(" ")}`)}; 
                  
            //    console.log(`node '${fs.pwd().replace(fs.$HOME(), '')}/${content.main}' ${args.join(" ")}`)
                
             //   const details = content.scripts
             //   
               // await processCommand(`alias ${content.name} node ${fs.pwd().replace(fs.$HOME(), '')}/${content.main}`) //
                
                commands[content.name].help =  content?.description || "npm linked command."
                
            return `${content.name} -> ~${fs.pwd().replace(fs.$HOME(), '')}/${content.name}`
              }
          
          let builtins;
          
          function npmValidiate(name){
            
               
            var scopedPackagePattern = new RegExp('^(?:@([^/]+?)[/])?([^/]+?)$')
var blacklist = [
  'node_modules',
  'favicon.ico',
]

function validate (name) {
  var warnings = []
  var errors = []

  if (name === null) {
    errors.push('name cannot be null')
    return done(warnings, errors)
  }

  if (name === undefined) {
    errors.push('name cannot be undefined')
    return done(warnings, errors)
  }

  if (typeof name !== 'string') {
    errors.push('name must be a string')
    return done(warnings, errors)
  }

  if (!name.length) {
    errors.push('name length must be greater than zero')
  }

  if (name.match(/^\./)) {
    errors.push('name cannot start with a period')
  }

  if (name.match(/^_/)) {
    errors.push('name cannot start with an underscore')
  }

  if (name.trim() !== name) {
    errors.push('name cannot contain leading or trailing spaces')
  }

  // No funny business
  blacklist.forEach(function (blacklistedName) {
    if (name.toLowerCase() === blacklistedName) {
      errors.push(blacklistedName + ' is a blacklisted name')
    }
  })

  // Generate warnings for stuff that used to be allowed

  // core module names like http, events, util, etc
  if (builtins.includes(name.toLowerCase())) {
    warnings.push(name + ' is a core module name')
  }

  if (name.length > 214) {
    warnings.push('name can no longer contain more than 214 characters')
  }

  // mIxeD CaSe nAMEs
  if (name.toLowerCase() !== name) {
    warnings.push('name can no longer contain capital letters')
  }

  if (/[~'!()*]/.test(name.split('/').slice(-1)[0])) {
    warnings.push('name can no longer contain special characters ("~\'!()*")')
  }

  if (encodeURIComponent(name) !== name) {
    // Maybe it's a scoped package name, like @user/package
    var nameMatch = name.match(scopedPackagePattern)
    if (nameMatch) {
      var user = nameMatch[1]
      var pkg = nameMatch[2]
      if (encodeURIComponent(user) === user && encodeURIComponent(pkg) === pkg) {
        return done(warnings, errors)
      }
    }

    errors.push('name can only contain URL-friendly characters')
  }

  return done(warnings, errors)
}

var done = function (warnings, errors) {
  var result = {
    validForNewPackages: errors.length === 0 && warnings.length === 0,
    validForOldPackages: errors.length === 0,
    warnings: warnings,
    errors: errors,
  }
  if (!result.warnings.length) {
    delete result.warnings
  }
  if (!result.errors.length) {
    delete result.errors
  }
  return result
}

return validate(name)

          }
          
           if(args[0] === "install"){
             
             const memfs = (await import("https://esm.sh/memfs")).default
             
             //args.shift()
           
            await runNpmCli(args, {
  // Here we use memfs but anything compatible with Node.js fs can be used
  fs: memfs.fs,
  cwd: "/home/web/app"
}); 
           
           // Function to recursively list files and directories
function listFiles(dir) {
  let results = [];

  try {
    //console.log(dir)
    const files = memfs.fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = `${dir}/${file}`;
     

      // Check if the path is a directory
      if (memfs.fs.statSync(filePath)?.isDirectory()) {
        //console.log(memfs.fs.statSync(filePath), filePath)
   
        fs.mkdir(fs.pwd().replace(fs.$HOME(), '') + filePath.replace("/home/web/app/", "/").replace("/home/web/app", "").replace("//"), "")
   //   console.log(filePath)
        listFiles(filePath)
       
        // Recurse into subdirectory
      }else {
        // Log file creation and content
        
        const content = memfs.fs.readFileSync(filePath, 'utf-8');
        
        fs.cat(">", fs.pwd().replace(fs.$HOME(), '') + filePath.replace("/home/web/app/", "/").replace("/home/web/app", ""), content)
        
       // console.log(`mkfile ${filePath} // Create file with content: "${content}"`);
      }
    });
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err.message);
  }

  return results;
}  
             
             const allFiles = listFiles('/home/web/app');
             
           }
          
          
             if(args[0] === "init"){
               
               if(fs.fileExists("package.json")){
                 return "'package.json' already exists in this path - must be removed before using init."
               }
               
               
               
               if(args[1] === "-y"){
                 return fs.cat(">", "package.json", JSON.stringify({
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}))
               }
               
               const getAnswers = async () => {
          
   builtins=  (await import("https://esm.sh/builtin-modules")).default
      
  term.output("\nThis utility will walk you through creating a package.json file.");
  term.output("It only covers the most common items and tries to guess sensible defaults.\n");
  term.output("See `npm help init` for definitive documentation on these fields and exactly what they do.");
  term.output("Press ^C at any time to quit.\n");

  const name = await term.input("package name: (my-project)") || 'my-project';
  const validation = npmValidiate(name);
  if (!validation.validForNewPackages) {
    throw new Error(`Invalid package name: ${name}`);
  }

  const version = await term.input("version: (1.0.0)") || '1.0.0';
  const description = await term.input("description: My project description") || 'My project description';
  const entry = await term.input("entry point: (index.js)") || 'index.js';
  const testCommand = await term.input("test command:");
  const gitRepo = await term.input("git repository:");
  const keywords = await term.input("keywords:");
  const author = await term.input("author: Your Name") || 'Your Name';
  const license = await term.input("license: (ISC)") || 'ISC';

  return {
    name,
    version,
    description,
    main: entry,
    scripts: {
      test: testCommand || 'echo "Error: no test specified" && exit 1',
    },
    repository: gitRepo,
    keywords: keywords ? keywords.split(',').map(kw => kw.trim()) : [],
    author,
    license,
  };
};

const createPackageJson = async () => {
  try {
    const packageData = await getAnswers();
    const packageJsonPath = '/path/to/your/project/package.json';
    const packageJson = JSON.stringify(packageData, null, 2);

    term.output("\nAbout to write to " + packageJsonPath + ":\n");
    term.output(packageJson + '\n');

    const confirmation = await term.input("Is this OK? (yes)") || 'yes';
    if (confirmation.toLowerCase() === 'yes') {
      await fs.cat(">", 'package.json', packageJson);
      term.output("\npackage.json created successfully!\n");
    } else {
      term.output("Aborted.\n");
    }
  } catch (err) {
    console.error(err.message);
  }
};

// Run the function to create package.json
await createPackageJson();
             }
          
        },
        help: "Usage: npm [command] [options]\nCommands:\n  link - Links a package.json file to a command\n  init - Initializes a new package.json file\nUse 'npm help [command]' for more info."
    },
  
  expr: {
            func: (args) => {
        if (args.length !== 3) {
            // Invalid number of arguments
            return "false";
        }

        let [operand1, operator, operand2] = args;

        // Convert numeric strings to numbers
        let num1 = parseFloat(operand1);
        let num2 = parseFloat(operand2);

        let result = false;

        switch (operator) {
            case "=":
            case "==":
                // Handle equality check
                result = operand1 === operand2;
                break;
            case "!=":
                // Handle inequality check
                result = operand1 !== operand2;
                break;
            case ">":
                // Handle greater than check
                result = !isNaN(num1) && !isNaN(num2) ? num1 > num2 : false;
                break;
            case "<":
                // Handle less than check
                result = !isNaN(num1) && !isNaN(num2) ? num1 < num2 : false;
                break;
            case ">=":
                // Handle greater than or equal to check
                result = !isNaN(num1) && !isNaN(num2) ? num1 >= num2 : false;
                break;
            case "<=":
                // Handle less than or equal to check
                result = !isNaN(num1) && !isNaN(num2) ? num1 <= num2 : false;
                break;
            case "&&":
                // Handle logical AND
                result = (operand1 !== "false" && operand2 !== "false");
                break;
            case "||":
                // Handle logical OR
                result = (operand1 !== "false" || operand2 !== "false");
                break;
            case "+":
                // Handle addition
                result = !isNaN(num1) && !isNaN(num2) ? num1 + num2 : false;
                break;
            case "-":
                // Handle subtraction
                result = !isNaN(num1) && !isNaN(num2) ? num1 - num2 : false;
                break;
            case "*":
                // Handle multiplication
                result = !isNaN(num1) && !isNaN(num2) ? num1 * num2 : false;
                break;
            case "/":
                // Handle division
                result = !isNaN(num1) && !isNaN(num2) && num2 !== 0 ? num1 / num2 : false;
                break;
            case "%":
                // Handle modulo
                result = !isNaN(num1) && !isNaN(num2) ? num1 % num2 : false;
                break;
            default:
                // Invalid operator
                result = false;
                break;
        }

        return typeof result === 'boolean' ? (result ? "true" : "false") : result;
    },
        help: "Usage: expr operand1 operator operand2 - Evaluates an expression and returns true or false."
    },
  replace: {
    func: (args) => {
        const [search, replacement, ...textArr] = args;
        const text = textArr.join(" ");
        if (!search || !replacement || !text) {
            return "Usage: replace <search> <replacement> <text>";
        }
        return text.split(search).join(replacement);
    },
    help: "Usage: replace <search> <replacement> <text> - Replaces occurrences of search string with replacement in the text."
},
  urlEncode: {
    func: (args) => {
        const url = args.join(" ");
        return encodeURIComponent(url);
    },
    help: "Usage: urlEncode <url> - URL encodes the specified string."
}, 
  changeDir: {
    func: (args) => {
      return "TODO"
        const dirPath = args[0];
        if (!dirPath) {
            return "Usage: changeDir <directory>";
        }
        try {
            process.chdir(dirPath);
            return `Changed directory to ${dirPath}`;
        } catch (error) {
            return `Error changing directory: ${error.message}`;
        }
    },
    help: "Usage: changeDir <directory> - Changes the current working directory."
},
  base64: {
    func: (args) => {
        const action = args[0]; // 'encode' or 'decode'
        const text = args.slice(1).join(" ");
        if (action === 'encode') {
            return Buffer.from(text).toString('base64');
        } else if (action === 'decode') {
            return Buffer.from(text, 'base64').toString('utf-8');
        } else {
            return "Usage: base64 <encode|decode> <text>";
        }
    },
    help: "Usage: base64 <encode|decode> <text> - Encodes or decodes the specified text in Base64."
},
  textToSpeech: {
    func: (args) => {
        const text = args.join(" ");
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
        return `Speaking: "${text}"`;
    },
    help: "Usage: textToSpeech <text> - Converts the provided text to speech."
},
  csvToJson: {
    func: async (args) => {
        const { parse } = (await import('https://esm.sh/csv-parse/sync'))

        const csvInput = args[0]; // CSV string
        const records = parse(csvInput, { columns: true });
        return JSON.stringify(records, null, 2);
    },
    help: "Usage: csvToJson <csv-string> - Converts CSV data to JSON format."
},
  wordCount: {
    func: async (args) => {
        const textInput = args[0]; // Input text
        const count = args[1]; // Word or character to count
        const occurrences = (textInput.match(new RegExp(count, 'g')) || []).length;
        return occurrences;
    },
    help: "Usage: wordCount <text> <word> - Counts occurrences of a word in the text."
},
  htmlToText: {
    func: async (args) => {
        const { convert } = (await import('https://esm.sh/html-to-text'));

        ////const htmlInput = args[0]; // HTML string
        const markdownOutput = convert(...args, {decodeEntities:false});
       return markdownOutput;
    },
    help: "Usage: htmlToText <html-string> - Converts HTML to Text."
},
  markdownLint: {
    func: async (args) => {
        const  MarkdownLint  = (await import('https://esm.sh/markdownlint')).default;

        const markdownInput = args[0]; // Markdown string
        const result = await new Promise((resolve) => {
            MarkdownLint({ strings: { 'input.md': markdownInput } }, (err, res) => resolve(res));
        });
        return JSON.stringify(result, null, 2);
    },
    help: "Usage: markdownLint <markdown-string> - Lints Markdown text for common issues."
},
  yamlParse: {
    func: async (args) => {
        const { parse } = (await import('https://esm.sh/yaml')).default;

        const yamlInput = args[0]; // YAML string
        const jsonData = parse(yamlInput);
        return JSON.stringify(jsonData, null, 2);
    },
    help: "Usage: yamlParse <yaml-string> - Parses YAML data to JSON."
},
  unique: {
    func: (args) => {
        const uniqueValues = [...new Set(args)];
        return uniqueValues.join(", ");
    },
    help: "Usage: unique <value1> <value2> ... - Returns unique values from the provided inputs."
},
  randomNumber: {
    func: (args) => {
        const min = parseInt(args[0], 10) || 0;
        const max = parseInt(args[1], 10) || 100;
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return `Random Number: ${randomNum}`;
    },
    help: "Usage: randomNumber [min] [max] - Generates a random number between min and max."
},
  grep: {
    func: (args) => {
 
        const searchTerm = args[0];
        const filename = args[1];
        if (!searchTerm || !filename) return "Usage: grep <searchTerm> <filename>";
        
        const content = fs.cat("", filename);
        const matches = content.split('\n').filter(line => line.includes(searchTerm));
        
        return matches.length > 0 ? matches.join("\n") : "No matches found.";
    },
    help: "Usage: grep <searchTerm> <filename> - Searches for the specified term in the file."
},
   golang: {
        func: async (args) => {
          
         // console.log(args[0])
          const { compile, format } = (await import('https://cdn.jsdelivr.net/npm/@live-codes/go2js@0.5.0/build/index.min.js'));
          
        //  console.log(format)
               const formatted = await format(args[0]);
          
          //console.log(formatted)
          
    //console.log(formatted);
   // const compiled = compile(code);
    
   const results = await compile(formatted, `https://cdn.jsdelivr.net/npm/@live-codes/go2js@0.5.0/build/`);
   // console.log(results)
         
          return results
          
        },
        help: "Usage: clear - Clears the terminal screen."
    },
  lolcat: {
        func: async (args) => {
          
       const lolcat = (await import("https://esm.sh/gh/MarketingPip/isomorphic-lolcat@patch-1/")).default;

let i = 20;
const o = rand(256);

function eachLine() {
  i -= 1;
  lolcat.options.seed = o + i;
}

function rand(max) {
  return Math.floor(Math.random() * (max + 1));
}

function ansiColor(color) {
  const r = Math.round(color.red / 255 * 5);
  const g = Math.round(color.green / 255 * 5);
  const b = Math.round(color.blue / 255 * 5);
  return `\x1b[38;5;${16 + (36 * r) + (6 * g) + b}m`;
}

const resetColor = `\x1b[0m`;

// Render the colored text using ANSI codes
const output = lolcat.format(function (char, color) {
  return `${ansiColor(color)}${char}${resetColor}`;
}, args[0], eachLine);

// Print the result as a single string
return  output.join('\n') 
    
 
        },
        help: "Usage: lolcat [text] - Colors the text with a rainbow effect."
    },
  
   charts: {
  func: async (args) => {
    if (!args[0]) {
      throw new Error("No data was provided.");
    }
    
   // console.log(args)
    
     const JSON5 = (await import("https://esm.sh/json5")).default
      const { Bar, HBar, Box } = (await import("https://esm.sh/tcharts.js")).default
    
    let chartData = args[0];
    let chartType = "bar"; // Default chart type
    
    if (args[1] === "-t" && args[2]) {
      chartType = args[2].toLowerCase();
    }
    
    if (typeof chartData !== "object") {
      chartData = JSON5.parse(args[0]);
    }
    
    function validateSchema(arr) {
      if (!Array.isArray(arr)) return false;
      return arr.every(item =>
        typeof item === 'object' &&
        item !== null &&
        'value' in item &&
        'name' in item &&
        Object.keys(item).length === 2 &&
        (typeof item.value === 'number' || typeof item.value === 'string') &&
        (typeof item.name === 'number' || typeof item.name === 'string') &&
        item.value !== null &&
        item.name !== null
      );
    }
    
    if (!validateSchema(chartData)) {
      throw new Error("Invalid data format.");
    }
    
    let chart;
    switch (chartType) {
      case 'bar':
        chart = new Bar();
        break;
      case 'hbar':
        chart = new HBar();
        break;
      case 'box':
        chart = new Box(60, 20);
        break;
      default:
        throw new Error("Invalid chart type. Valid options are: bar, hbar, box.");
    }
    
    chart.setData(chartData);
    return chart.string();
  },
  help: "Usage: charts [data] -t [chartType]. Options for chartType: bar (default), hbar, box."
},
  qrcode:{
  func: async function (args) {
    if (!args[0]) {
      throw new Error("No string was provided.");
    }
    const qr = await import("https://esm.sh/qrcode-terminal");
  let result;
    qr.generate(args.join(" "), function (qrcode) {
      result = qrcode
    });
    return result
  },
  help: "Usage: qrcode [text] - Generates a QR code from given string."
},
  todo: {
    func: (args) => {
       const filePath = args[0];
        const fileContent = fs.cat('', filePath, null);
        let todoList = fileContent
        args.shift()
        
      
        if(todoList){
          todoList = JSON.parse(todoList)
        }else{
          todoList = {}
        }
      
        /*
          if (args.length === 0) {
            return `Invalid command. Use 'add', 'list', 'done', or 'delete'`;
        }

        const command = args[0];
        switch (command) {
            case 'add':
                const task = args.slice(1).join(' ');
                const taskId = Object.keys(todoList).length + 1;
                todoList[taskId] = { task, done: false };
                fs.writeFileSync(filePath, JSON.stringify(todoList, null, 2));
                return `Task added: ${task}`;

            case 'list':
                let list = 'Todo List:\n';
                Object.keys(todoList).forEach((key) => {
                    const item = todoList[key];
                    list += `${key}. ${item.task} ${item.done ? '(Done)' : ''}\n`;
                });
                return list;

            case 'done':
                const doneTaskNumber = parseInt(args[1]);
                if (todoList[doneTaskNumber]) {
                    todoList[doneTaskNumber].done = true;
                    fs.writeFileSync(filePath, JSON.stringify(todoList, null, 2));
                    return `Task ${doneTaskNumber} marked as done`;
                } else {
                    return `Task ${doneTaskNumber} not found`;
                }

            case 'delete':
                const deleteTaskNumber = parseInt(args[1]);
                if (todoList[deleteTaskNumber]) {
                    delete todoList[deleteTaskNumber];
                    // Re-index tasks
                    todoList = Object.keys(todoList).reduce((acc, key) => {
                        const newKey = parseInt(key) > deleteTaskNumber ? parseInt(key) - 1 : parseInt(key);
                        acc[newKey] = todoList[key];
                        return acc;
                    }, {});
                    fs.writeFileSync(filePath, JSON.stringify(todoList, null, 2));
                    return `Task ${deleteTaskNumber} deleted`;
                } else {
                    return `Task ${deleteTaskNumber} not found`;
                }

            default:
                return `Invalid command. Use 'add', 'list', 'done', or 'delete'`;
        }*/

        if (args.includes('add')) {
            const task = args.slice(1).join(' ');
            todoList[Object.keys(todoList).length + 1] = { task, done: false };
            fs.cat(">", filePath, JSON.stringify(todoList))
            return `Task added: ${task}`;
        } else if (args.includes('list')) {
            let list = 'Todo List:\n';
            Object.keys(todoList).forEach((key) => {
                list += `${key}. ${todoList[key].task} ${todoList[key].done? '(Done)' : ''}\n`;
            });
            return list;
        } else if (args.includes('done')) {
            const taskNumber = parseInt(args[1]);
            if (todoList[taskNumber]) {
                todoList[taskNumber].done = true;
                fs.cat(">", filePath, JSON.stringify(todoList))
                return `Task ${taskNumber} marked as done`;
            } else {
                return `Task ${taskNumber} not found`;
            }
        } else if (args.includes('delete')) {
            const taskNumber = parseInt(args[2]);
            if (todoList[taskNumber]) {
                delete todoList[taskNumber];
                fs.cat(">", filePath, JSON.stringify(todoList))
                return `Task ${taskNumber} deleted`;
            } else {
                return `Task ${taskNumber} not found`;
            }
        } else {
            return `Invalid command. Use 'add', 'list', 'done', or 'delete'`;
        }
    },
    help: 'Usage: todo <command> [args] - Manage your todo list.\n  add <task> - Add a new task to the list.\n  list - Display the current todo list.\n  done <task number> - Mark a task as done.\n  delete <task number> - Delete a task from the list.'
},
    removeProgram: {
    func: async (args) => {
        if (args.length < 1) {
            return "Error: Not enough arguments. Usage: removeProgram <name>";
        }

        const name = args[0];

        if (!commands[name]) {
            return `${name} does not exist.`;
        }

        if (commands[name]?.alias) {
            return `${name} is an alias, not a program. To remove an alias, use 'unalias <name>'.`;
        }

        if (!commands[name]?.installed) {
            return `${name} is not an installed program that can be removed.`;
        }

        delete commands[name];
        return `Deleted ${name}`;
    },
    help: "Usage: removeProgram <name>\nRemoves an installed program with the specified name. If the program is an alias or does not exist, appropriate error messages will be shown. Note: Use 'unalias <name>' to remove an alias instead."
},
   addProgram: {
        func: async (args) => {
          
          if (args.length < 2) {
            return "Error: Not enough arguments. Usage: alias <name> <existing_command>";
        }
                
                   if(commands[args[0]]){
                     return `${args[0]} already exists.`
                   }
                   
          
      //    return "NOT IMPLMENTED"
          
          
          /*
          idea add programs from file system - deep parse...
          {
  "func": async args => {\n    return await commands['cowsay'].func(args, true);\n  },
  "help": "Usage: clear - Clears the terminal screen."
}
*/
          
          function deepParse(obj, seen = new WeakSet()) {
 

  if (Array.isArray(obj)) {
    return obj.map(item => deepParse(item, seen));
  }

  if (typeof obj === 'object' && obj !== null) {
    const result = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'function') {
          // Convert functions to their string representation
          result[key] = obj[key].toString();
        } else {
          result[key] = deepParse(obj[key], seen);
        }
      }
    }
    return result;
  }

  return obj;
}
          function jsonEscape(str)  {
   return str.replace(/\n/g, "").replace(/\r/g, "").replace(/\t/g, "");
}
          // NEED A SAFER WAY OF DOING THIS.
          function parseJSONWithFunctions(jsonStr) {
  const obj = JSON.parse(jsonStr, (key, value) => {
    if (typeof value === 'string' && key.startsWith('func')) {
      return eval(`(${value})`);
    }
    return value;
  });
  return obj;
}
          
         //const program = parseJSONWithFunctions(jsonEscape(fs.cat('', args[1], null)))
         let program; 
          try{
           program =  JSON.parse(jsonEscape(fs.cat('', args[1], null)))
          }catch{
             program = JSON.parse(jsonEscape(JSON.stringify(fs.cat('', args[1], null))))
          }
          
         program.installed = true // set so we can indicate this was installed. (so it can be removed via removeProgram)
           
          if(program.func){
            program.func =  eval(`(${program.func})`);
          }
          
             commands[args[0]] = program
               
            
               /*structuredClone( jsonEscape(fs.cat('', args[1], null)))
          console.log( structuredClone( jsonEscape(fs.cat('', args[1], null))))
          
          console.log()
          */
          
        },
        help:  "Usage: addProgram <file>\n Installs a 'program' with the specified name."
    },
      setTheme: {
        func: async (args) => {
        const themeNames = [
            'ubuntu',
            'monokai',
            'solarized',
            'dracula',
            'gruvbox',
            'nord',
            'one-dark',
            'night-owl',
            'tomorrow-night',
            'tokyonight',
            'solarized-light',
            'dracula-soft',
            'shades-of-purple',
            'catppuccin',
            'material',
            'onedarkpro',
            'gruvbox-material',
            'ayu-dark',
            'tokyo-night-storm',
            'solarized-dark',
            'nimbus',
            'xresources',
            'dracula-official',
            'gruvbox-light',
            'ayu-mirage',
            'monokai-pro',
            'nord-light',
            'papercolor',
            'oceanic-next',
            'palenight',
                      'solarized-eight-color-light',
            'material-palenight',
            'monokai-extended',
            'github',
            'github-dark',
            'github-light',
            'atom-one-light',
            'gruvbox-dark-hard',
            'one-light',
            'xcode',
            'base16-tomorrow-light',
            'night-owl-light',
            'rainbow',
                        'abyss',
            'cobalt2',
            'dracula-extended',
            'earthsong',
            'horizon',
            'kimbie-dark',
            'oceanic-next',
            'predawn',
            'soda',
            'wombat',
            'ms-dos',
            'classic-blue-dos',
                       'classic-green-black', // Added classic green on black theme
            'classic-amber-black', // Added classic amber on black theme
            'classic-white-blue',  // Added classic white on blue theme
           'classic-black-green', // Added classic black on green theme 
            'classic-gray-black',   // Added classic gray on black theme
          
           'glitchy', // Added glitchy theme,
           'glitchy2', // Added glitchy theme
           'windows-classic',
           'windows-7',
            'vim',
          'vt323'
        ];
        
        const themeName = args.join(" ").trim().toLowerCase();     
      
          
   
          
      if (themeName === '--list') {
        return `Available themes:\n${themeNames.join(',\n')}`;
    }
          
        const shell = document.querySelector('#terminal-container');
        
              if (themeName === '--reset') {
         return themeNames.forEach(theme => {
            shell.classList.remove(theme);
        });
    }    
      
        
        // Add the new theme class if it is valid
        if (themeNames.includes(themeName)) {
  // Remove any existing theme classes from the shell
        themeNames.forEach(theme => {
            shell.classList.remove(theme);
        });
            shell.classList.add(themeName);
            fs.export("THEME", themeName)
        } else {
            return `Invalid theme name: ${themeName}`;
        }
    },
        help: "Usage: setTheme [--list] [theme] - Sets theme for shell.\n --list      Lists all available themes.\n theme      Sets the specified theme. Must be one of the available themes.\n --reset Unsets all themes"
    },
   log:{
    func: async (args) => {
        const options = { text: '', logFile: '' };

        // Parse arguments
        for (let i = 0; i < args.length; i++) {
            if (args[i] === '-l' && args[i + 1]) {
                options.logFile = args[++i];
            } else {
                options.text = args[i].trim() 
            }
        }

        if (!options.logFile) {
            term.output('Log file not specified. Use -l to provide a log file.\n');
            return;
        }

        // Command execution
        const output = await processCommand(options.text);

        // Log output to file
         fs.cat(">", options.logFile, output);
        term.output(`Output logged to ${options.logFile}\n`);
    },
    help: "Usage: log [options] [command] - Logs the command output to a file. Use -l to specify the log file."
},
   retry:{
    func: async (args) => {
        const options = { text: '', retries: 3 };

        // Parse arguments
        for (let i = 0; i < args.length; i++) {
            if (args[i] === '-r' && args[i + 1]) {
                options.retries = parseInt(args[++i], 10);
            } else {
                options.text += args[i].trim() + ' ';
            }
        }

        let attempt = 0;
        async function retry(){
        if (attempt < options.retries) {
            try {
                // Replace with actual command execution
                await processCommand(options.text);
                term.output('Command executed successfully.\n');
                return;
            } catch (error) {
                attempt++;
                term.output(`Attempt ${attempt} failed. ${error.message}\n`);
                if (attempt === options.retries) {
                    return 'All attempts failed.\n'
                }
                if (attempt <= options.retries){
                  await retry()
                }
            }
          }
        }
         await retry()
    },
    help: "Usage: retry [options] [command] - Retries the command if it fails. Use -r to specify the number of retries."
},
   confirm: {
    func: async (args, _options) => {
        const options = {
            immediate: false // Flag to skip confirmation
        };
   
        // Confirm args
      
        if(args.length < 1){
          throw new TypeError("No arguments were provided.")
        }
        
         if (args[0] === '-i') {
                 options.immediate = true;
                 args.shift()
                 
            }
        // Function to prompt user for confirmation
        const promptUser = async () => {
            const response = await term.input('Are you sure? (y/yes/n/no) ')
            const lowerResponse = response.trim().toLowerCase();

            if (['y', 'yes'].includes(lowerResponse)) {
                return true;
            } else if (['n', 'no'].includes(lowerResponse)) {
                return false;
            } else {
                term.output('Invalid input. Please enter y/yes or n/no.\n');
                return promptUser(); // Recursively call function until valid input is received
            }
        };

        // Decide whether to prompt user or not
        if (options.immediate || await promptUser()) {
            // Replace this with the actual command execution
            return await processCommand(args.join(" "), _options);
        } else {
            term.output('Action canceled.\n');
        }
    },
    help: "Usage: confirm [options] [message] - Prompts for confirmation before executing the command. Use -i to skip confirmation."
},
  
    cron: {
        func: async (args) => {
           const { parseCronExpression } = await import ("https://esm.sh/cron-schedule")
const cron = parseCronExpression(args.join(" "))
    

return String(cron.getNextDate(new Date())) // */5 * * * * example 2020-11-20T17:35:00.000Z

        },
        help: "Usage: cron [expression]  - Parses a cron expression."
    },  
   file: {
        func: async (args) => {
             return "TODO"
          
        },
        help: "Usage: file [file] - Determines file type."
    },
     /*iostat: {
        func: async (args) => {
             return "TODO"
          
          The `iostat` command provides input/output statistics for devices and partitions. Here’s a sample output:

```shell
$ iostat
Linux 5.15.0-46-generic (hostname)  09/12/2024  _x86_64_  (4 CPU)

Device:            tps    kB_read/s    kB_wrtn/s    kB_read    kB_wrtn
sda               10.45        150.34        200.56    1234567    2345678
sdb                5.23         75.12         30.23     567890     123456
```

**Explanation:**
- **tps**: Transactions per second (I/O operations).
- **kB_read/s**: Kilobytes read per second.
- **kB_wrtn/s**: Kilobytes written per second.
- **kB_read**: Total kilobytes read.
- **kB_wrtn**: Total kilobytes written.

The output provides a snapshot of disk I/O performance and can help in monitoring system performance and diagnosing I/O-related issues.
          
        },
        help: "Usage: iostat - provides input/output statistics."
    },*/ 
    fingerprint: {
        func: async (args) => {
             const lscpu = await commands.lscpu.func()
            return { ...lscpu, ...fingerprint() };
          
        },
        help: "Usage: fingerprint - Returns info about the device."
    },
    lscpu: {
        func: async (args) => {
          const UAParser = (await import("https://esm.sh/ua-parser-js")).default
          let parser = new UAParser(navigator.userAgent);
          
          
          function getArchitectureFromUserAgent() {
    const userAgent = navigator.userAgent;

    // Define a mapping of regex patterns to architecture names and bitness
    const architectureMap = {
        'x64': { bitness: '64-bit', arch: 'x64' },
        'x86': { bitness: '32-bit', arch: 'x86' },
        'ARM64': { bitness: '64-bit', arch: 'ARM64' },
        'ARM': { bitness: '32-bit', arch: 'ARM' },
        'IA-64': { bitness: '64-bit', arch: 'IA-64' },
        'PowerPC': { bitness: 'varied', arch: 'PowerPC' },
        'MIPS': { bitness: 'varied', arch: 'MIPS' }
    };

    // Iterate through the map and return the matched architecture and bitness
    for (const [key, { bitness, arch }] of Object.entries(architectureMap)) {
        if (new RegExp(key, 'i').test(userAgent)) {
            return { bitness, arch };
        }
    }

    return { bitness: null, arch: null};
}

 const archType = getArchitectureFromUserAgent()

          
                  function getCpuInfo() {
                
                    const osType = parser?.getOS()
                    
                    const ram  = navigator?.deviceMemory
                    
            const cpuInfo = {
                Architecture:archType.arch || "Unknown",
                CPU:parser?.getCPU()?.architecture,
                OS:osType.name || "Unknown",
           //     userAgent: navigator.userAgent,
               // platform: navigator.platform,
               // /hardwareConcurrency: navigator.hardwareConcurrency, threads
                RAM: ram ? `${ram} GB` : "Unsupported" , /// ram
                //maxTouchPoints: navigator.maxTouchPoints,
              /*  performance: {
                    memory: performance.memory ? performance.memory.jsHeapSizeLimit : 'Not supported',
                    timing: performance.timing ? {
                        navigationStart: performance.timing.navigationStart,
                        unloadEventStart: performance.timing.unloadEventStart,
                        unloadEventEnd: performance.timing.unloadEventEnd,
                        redirectStart: performance.timing.redirectStart,
                        redirectEnd: performance.timing.redirectEnd,
                        fetchStart: performance.timing.fetchStart,
                        domainLookupStart: performance.timing.domainLookupStart,
                        domainLookupEnd: performance.timing.domainLookupEnd,
                        connectStart: performance.timing.connectStart,
                        connectEnd: performance.timing.connectEnd,
                        secureConnectionStart: performance.timing.secureConnectionStart,
                        requestStart: performance.timing.requestStart,
                        responseStart: performance.timing.responseStart,
                        responseEnd: performance.timing.responseEnd,
                        domLoading: performance.timing.domLoading,
                        domInteractive: performance.timing.domInteractive,
                        domContentLoadedEventStart: performance.timing.domContentLoadedEventStart,
                        domContentLoadedEventEnd: performance.timing.domContentLoadedEventEnd,
                        domComplete: performance.timing.domComplete,
                        loadEventStart: performance.timing.loadEventStart,
                        loadEventEnd: performance.timing.loadEventEnd
                    } : 'Not supported'
                }*/ 
            };

            return cpuInfo;
        }
     /// todo need to parse user agent..
            /*
            $ lscpu
Architecture:        x86_64
CPU op-mode(s):      32-bit, 64-bit
Model name:          Intel(R) Core(TM) i7-8550U CPU @ 1.80GHz
*/  
     // ```   return getCpuInfo(); 
          
         return getCpuInfo()
          
        },
        help: "Usage: lscpu - Displays information about the CPU architecture."
    },
  split: {
    func: async (args) => {
  
        let inputFile = '-';
        let outputPrefix = 'x';
        let bytes = -1;
        let lines = 1000;
        let suffixLength = 2;
        if(args.length < 1){
          throw new Error(commands.split.help)
        }
      
        for (let i = 0; i < args.length; i++) {
            if (args[i] === '-a' && args[i + 1]) {
                suffixLength = parseInt(args[++i]);
            } else if (args[i] === '-b' && args[i + 1]) {
                let size = args[++i];
                if (size.endsWith('k')) {
                    bytes = parseInt(size.replace('k', '')) * 1024;
                } else if (size.endsWith('m')) {
                    bytes = parseInt(size.replace('m', '')) * 1048576;
                } else {
                    bytes = parseInt(size);
                }
            } else if (args[i] === '-l' && args[i + 1]) {
                lines = parseInt(args[++i]);
            } else if (inputFile) {
              //  throw new TypeError("No file provided") // set // inputFile === '-' if we ever get stdin file working truly.. // inputFile
                inputFile = args[i];
            } else {
                outputPrefix = args[i];
            }
        }

        if (inputFile === '-') {
          //  inputFile = '/dev/stdin';
        }
      
       

        try {
            const fileContent = await fs.cat("", inputFile);
            const chunks = [];

            if (bytes > 0) {
                for (let i = 0; i < fileContent.length; i += bytes) {
                    chunks.push(fileContent.slice(i, i + bytes));
                }
            } else {
                const linesArray = fileContent.split('\n');
                for (let i = 0; i < linesArray.length; i += lines) {
                    chunks.push(linesArray.slice(i, i + lines).join('\n') + '\n');
                }
            }

            for (let i = 0; i < chunks.length; i++) {
                const suffix = Array(suffixLength).fill('a').map((c, j) => {
                    return String.fromCharCode((i + Math.pow(26, j)) % 26 + 'a'.charCodeAt(0));
                }).join('');
                const outputFile = `${outputPrefix}${suffix}`;
                await fs.cat(">", outputFile, chunks[i]);
            }
        } catch (error) {
            return `Error: Unable to split file. ${error.message}`;
        }
    },
    help: "Usage: split [-l line_count] [-a suffix_length] [file [name]] - Split a file into pieces."
},
  detectType: {
    func: async (args) => {
        console.log(args)
    
       if(!args){
         return "undefined"
       }
      
       let value = args.join(" ")
          // Check if the value is a string and attempt to parse it
    if (typeof value === "string") {
        // Trim whitespace for accurate evaluation
        value = value.trim();

        // Check for number
        if (!isNaN(value) && value !== "") {
            return "number";
        }
        // Check for null, boolean, or JSON object
        if (value === "null") {
            return "object";
        } else if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
            return "boolean";
        } else if (value.startsWith("{") && value.endsWith("}")) {
            return "object";
        } else if (value.startsWith("[") && value.endsWith("]")) {
            return "array";
        }
        return "string"; // Default to string
    } else {
         
      
    return (typeof value).toLowercase()
      
    }
    },
    help: "Usage: detectType [value] - Determines the type of the provided value. The value can be a string representation of a number, array, object, boolean, or string."
},
   isPastDate:{
    func: (args) => {
        if (args.length < 1) {
            console.log("Error: Please provide a date as an argument.");
            return;
        }
        
        function isPast(date) {
    const currentDate = new Date();
    return date < currentDate;
}

       /**
 * Verifies if the given date string is in the format YYYY-MM-DD.
 * 
 * @param {string} dateStr - The date string to verify.
 * @returns {boolean} - True if the date string is in the correct format, false otherwise.
 */
function isValidDateFormat(dateStr) {
    // Regular expression for YYYY-MM-DD format
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    
    // Test the date format
    if (!regex.test(dateStr)) return false;
    
    // Additional check to verify if the date is a valid calendar date
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    // Check if the date is valid
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
      
      const userInput = args.join(" ")
      
      if(!isValidDateFormat(userInput)){
       throw new TypeError("Invalid date format. Format: YYYY-MM-DD.")
     }
      
 
        const date = new Date();
        const result = isPast(date);
        return result || "false"
    },
    help: "Usage: isPastDate [date] - Checks if the given date is in the past.\n Example: isPastDate 2022-01-01"
},
  capitalize: {
    func: (args) => {
        const capitalized = args 
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        return capitalized;
    },
    help: "Usage: capitalize [text] - Capitalizes the first letter of each word in the provided text."
},
  validateJson: {
    func: (args) => {
        const jsonString = args.join(" ");
        try {
            JSON.parse(jsonString);
            return "Valid JSON.";
        } catch (e) {
            return "Invalid JSON.";
        }
    },
    help: "Usage: validate-json <json_string> - Validates if the string is valid JSON."
},
  fetch: {
    func: async (args) => {
        const fetch = require('node-fetch');
        const url = args[0];
        const method = args[1] || 'GET';
        const options = {
            method,
            headers: {}
        };

        // Handle headers
        for (let i = 2; i < args.length; i += 2) {
            if (args[i].startsWith('--header')) {
                const header = args[i + 1].split(':');
                options.headers[header[0].trim()] = header[1].trim();
            }
        }

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            return data;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: "Usage: fetch <url> [method] [--header key:value] - Makes an HTTP request to the specified URL."
},
  htmlentities: {
    func: (args) => {
        const { encode, decode } = require('html-entities');
        const command = args[0];
        const text = args.slice(1).join(' ');

        if (command === 'encode') {
            return encode(text);
        } else if (command === 'decode') {
            return decode(text);
        }
        return "Unknown command. Use 'encode' or 'decode'.";
    },
    help: "Usage: htmlentities <encode|decode> <text> - Encodes or decodes HTML entities."
},
  args: {
    func: async (args) => {
        const yargs = require('yargs/yargs');
        const { argv } = yargs(args);
        return JSON.stringify(argv);
    },
    help: "Usage: args <arg1> <arg2> ... - Parses command-line arguments and returns them as JSON."
},
 
  dotenv: {
    func: async (args) => {
        require('dotenv').config();
        return `Environment variables loaded from .env file.`;
    },
    help: "Usage: dotenv - Loads environment variables from a .env file."
},
  moment: {
    func: async (args) => {
        const moment = require('moment');
        const action = args[0];
        if (action === 'now') {
            return moment().format(); // Current date and time
        } else if (action === 'add' && args[1] && args[2]) {
            return moment().add(parseInt(args[1]), args[2]).format(); // Add time
        }
        return "Usage: moment [now|add <amount> <unit>] - Manage dates and times.";
    },
    help: "Usage: moment <action> - Manage dates and times."
},
  uuid: {
    func: async () => {
        const { v4: uuidv4 } = (await import('https://esm.sh/uuid'))
        return uuidv4();
    },
    help: "Usage: uuid - Generates a random UUID."
},
  hash: {
    func: async (args) => {
      const crypto = (await import ("https://esm.sh/crypto-browserify")).default
        const algorithm = 'sha256'; // Default to SHA-256
        args.shift()
        const text = args.join(" ");

        if (!text) {
            return "Error: Please provide text to hash.";
        }

        const hash = crypto.createHash(algorithm).update(text).digest('hex');
        return `Hash (${algorithm}): ${hash}`;
    },
    help: "Usage: hash [algorithm] [text] - Generates a hash of the given text using the specified algorithm (default: SHA-256)."
},
sysinfo: {
    func: () => {

       let ram  = navigator?.deviceMemory 
       if(ram){
      const bytes = ram * 1000000000; 
      ram = `${bytes} bytes`
       }

       // const os = require('os');
        return `Operating System: ${os.platform()} ${os.release()}\nCPU: ${os?.cpus()[0]?.model}\nMemory: ${ram}`;
    },
    help: "Usage: sysinfo - Displays system information."
},
  reverse: {
    func: (args) => {
        const text = args.join(" ");
        if (!text) {
            return "Usage: reverse <text>";
        }
        return text.split("").reverse().join("");
    },
    help: "Usage: reverse <text> - Reverses the specified text."
},
  hashfile: {
    func: async (args) => {
        const filename = args[0];
        const data = fs.cat("", filename);
        const hash = await crypto.subtle.digest('SHA-256', data);
        return `Hash of ${filename}: ${hash}`;
    },
    help: "Usage: hashfile <filename> - Computes the hash of the specified file."
},
  truncate: {
    func: (args) => {
        const maxLength = parseInt(args[0], 10);
        const text = args.slice(1).join(" ");
        
        if (isNaN(maxLength) || maxLength < 0) {
            return "Error: The first argument must be a non-negative number.";
        }
        
        const truncated = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
        return truncated;
    },
    help: "Usage: truncate [maxLength] [text] - Truncates the text to the specified maximum length."
},
  translate: {
    func: async (args) => {
        const text = args.slice(0, -2).join(" ");
        const targetLanguage = args[args.length - 1];
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLanguage}`);
        const data = await response.json();
        return data.responseData.translatedText;
    },
    help: "Usage: translate <text> <target_language> - Translates text to the specified language."
},
  quote: {
    func: async () => {
        const response = await fetch('https://johndturn-quotableapiproxy.web.val.run/random');
        const data = await response.json();
        return `"${data[0].content}" - ${data[0].author}`;
    },
    help: "Usage: quote - Fetches a random inspirational quote."
},
  generatePassword: {
    func: (args) => {
        const length = parseInt(args[0]) || 12; // Default to 12 characters
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
        let password = "";
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return `Generated Password: ${password}`;
    },
    help: "Usage: generate-password <length> - Generates a random password of the specified length."
},
  ip: {
    func: async () => {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return `Your public IP address is: ${data.ip}`;
    },
    help: "Usage: ip - Fetches your public IP address."
},
  env: {
    func: (args) => {
        if (args[0] === 'set' && args[1] && args[2]) {
            Deno.env.set(args[1], args[2]);
            return `Environment variable ${args[1]} set to ${args[2]}.`;
        } else if (args[0] === 'list') {
            return Object.entries(Deno.env.toObject()).map(([key, value]) => `${key}: ${value}`).join("\n");
        } else {
            return "Usage: env set <key> <value> | env list";
        }
    },
    help: "Usage: env set <key> <value> - Sets an environment variable. | env list - Lists environment variables."
},
  jsonpath: {
    func: async (args) => {
       const jsonpath = (await import('https://esm.sh/jsonpath')).default;
        const jsonData = JSON.parse(args[0]);
        const path = args[1];
        const result = jsonpath.query(jsonData, path);
        return `Query result: ${JSON.stringify(result)}`;
    },
    help: "Usage: jsonpath <json_string> <jsonpath_expression> - Queries JSON data using JSONPath."
},
  path: {
    func: (args) => {
        const path = require('path');
        const command = args[0];
        const filepath = args[1];
        switch (command) {
            case 'basename':
                return path.basename(filepath);
            case 'dirname':
                return path.dirname(filepath);
            case 'extname':
                return path.extname(filepath);
            default:
                return "Unknown path command.";
        }
    },
    help: "Usage: path <command> <filepath> - Manipulates file paths (basename, dirname, extname)."
},
  wget: {
    func: async (args) => {

        const url = args[0];
        const output = args[1] || path.basename(url);

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const fileStream = fs.cat(">", output, await response.blob());
             
        } catch (error) {
            return `Error downloading file: ${error.message}`;
        }
    },
    help: "Usage: wget <url> [output_file] - Downloads the file from the specified URL."
},
  wss: {
    func: async (args) => {
     //   const WebSocket = require('ws');

        if (args.length < 1) {
            return 'Usage: wss <ws://host:port>';
        }

        const url = args[0];

        return new Promise((resolve, reject) => {
            const ws = new WebSocket(url);

            ws.on('open', () => {
                resolve('Connected to WebSocket server.');
            });

            ws.on('message', (message) => {
                console.log(`Received: ${message}`);
            });

            ws.on('error', (error) => {
                reject(`Error: ${error.message}`);
            });

            ws.on('close', () => {
                console.log('Connection closed.');
            });
        });
    },
    help: "Usage: wss <ws://host:port> - Connects to a WebSocket server at the specified URL."
},
  nl: {
    func: async (args) => {
 
        const filePath = args[0];

        try {
            const data = await fs.cat("", filePath);
            const lines = data.split('\n');
            const numberedLines = lines.map((line, index) => `${index + 1}\t${line}`);
            return numberedLines.join('\n');
        } catch (error) {
            return `Error reading file: ${error.message}`;
        }
    },
    help: "Usage: nl <file> - Numbers the lines of the specified file."
},
  jimp: {
    func: async (args) => {
        const Jimp = require('jimp');
        const imagePath = args[0];
        const outputPath = args[1] || 'output.png';
        const image = await Jimp.read(imagePath);
        await image.resize(256, 256).quality(60).writeAsync(outputPath);
        return `Image processed and saved to ${outputPath}`;
    },
    help: "Usage: jimp <imagePath> [outputPath] - Resizes and saves the image."
},
  sharp: {
    func: async (args) => {
        const sharp = (await import('https://esm.sh/sharp')).default;
        const command = args[0]; // 'resize' or 'crop'
        const filename = args[1];
        
        // Use an image processing library like Sharp
        const image = await sharp(filename);
        if (command === 'resize') {
            const width = parseInt(args[2]);
            const height = parseInt(args[3]);
            await image.resize(width, height).toFile(`resized_${filename}`);
            return `Image resized to ${width}x${height}.`;
        } else if (command === 'crop') {
            const left = parseInt(args[2]);
            const top = parseInt(args[3]);
            const width = parseInt(args[4]);
            const height = parseInt(args[5]);
            await image.extract({ left, top, width, height }).toFile(`cropped_${filename}`);
            return `Image cropped to ${width}x${height}.`;
        }
        return "Usage: image resize <filename> <width> <height> | image crop <filename> <left> <top> <width> <height>";
    },
    help: "Usage: image resize <filename> <width> <height> - Resizes an image. | image crop <filename> <left> <top> <width> <height> - Crops an image."
},
  zip: {
    func: async (args) => {
      const  JSZip = (await import ("https://esm.sh/jszip")).default;
        const zip = new JSZip();
        for (const file of args) {
            const data = fs.cat("", file);
            zip.file(file, data);
        }
        const content = await zip.generateAsync({ type: "blob" });
        await fs.cat(">", "archive.zip", new Uint8Array(await content.arrayBuffer()));
        return "Files compressed into archive.zip.";
    },
    help: "Usage: zip <file1> <file2> ... - Compresses specified files into a zip archive."
},
  unzip: {
    func: async (args) => {
        const  JSZip = (await import ("https://esm.sh/jszip")).default;
        const zipFile = args[0]; // The ZIP file to unzip
        const outputDir = args[1] || '.'; // Output directory (default is current directory)

        try {
            const data = fs.cat("", zipFile);
            const zip = await JSZip.loadAsync(data);
            await Promise.all(Object.keys(zip.files).map(async (filename) => {
                const fileData = await zip.files[filename].async('nodebuffer');
                fs.cat(">", `${outputDir}/${filename}`, fileData);
            }));
            return `Successfully unzipped ${zipFile} to ${outputDir}`;
        } catch (error) {
            return `Error unzipping file: ${error.message}`;
        }
    },
    help: "Usage: unzip <file.zip> [outputDir] - Extracts the contents of the specified ZIP file to the given directory."
},
  http: {
    func: async (args) => {
        const method = args[0];
        const url = args[1];
        const options = method === 'POST' ? { method, body: JSON.stringify(args.slice(2)), headers: { 'Content-Type': 'application/json' } } : {};

        const response = await fetch(url, options);
        const data = await response.json();
        return `Response from ${url}:\n${JSON.stringify(data)}`;
    },
    help: "Usage: http <GET|POST> <url> [data] - Makes HTTP requests."
},
  clipboard: {
    func: async (args) => {
        if (args[0] === 'copy') {
            await navigator.clipboard.writeText(args.slice(1).join(" "));
            return "Text copied to clipboard.";
        } else if (args[0] === 'paste') {
            const text = await navigator.clipboard.readText();
            return `Clipboard text: ${text}`;
        }
    },
    help: "Usage: clipboard copy <text> | clipboard paste - Copies text to clipboard or pastes from clipboard."
},
  httpServer: {
    func: async (args) => {
      return "TODO"
        const port = args[0] || 3000; // Default to port 3000
        const http = require('http');

        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Hello, World!\n');
        });

        server.listen(port, () => {
            console.log(`Server running at http://localhost:${port}/`);
        });
    },
    help: "Usage: httpServer [port] - Starts a simple HTTP server."
},

 randomwords: {
    func: async (args) => {
        const {generate} = (await import('https://esm.sh/random-words'));
        const count = parseInt(args[0], 10) || 1;
        return generate(count).join(' ');
    },  
    help: "Usage: randomwords [count] - Generates a specified number of random words."
},
  
  jsonDiff: {
    func: async (args) => {
        const  diff  = (await import('https://esm.sh/deep-diff')).default;

        const json1 = JSON.parse(args[0]); // First JSON string
        const json2 = JSON.parse(args[1]); // Second JSON string
        const differences = diff(json1, json2);
        return JSON.stringify(differences, null, 2);
    },
    help: "Usage: jsonDiff <json-string1> <json-string2> - Finds differences between two JSON objects."
},
  asciiDog: {
    func: async (args) => {
        const textInput = args[0] || "Woof!"; // Default message
      
      return  "                        ;\\\n                       |' \\\n    _                  ; : ;\n   / `-.              /: : |\n  |  ,-.`-.          ,': : |\n  \\  :  `. `.       ,'-. : |\n   \\ ;    ;  `-.__,'    `-.|           \n    \\ ;   ;  :::  ,::'`:.  `.          \n     \\ `-. :  `    :.    `.  \\        \n      \\   \\    ,   ;   ,:    (\\\n       \\   :., :.    ,'o)): ` `-.\n      ,/,' ;' ,::\"'`.`---'   `.  `-._\n    ,/  :  ; '\"      `;'          ,--`.\n   ;/   :; ;             ,:'     (   ,:)\n     ,.,:.    ; ,:.,  ,-._ `.     \\\"\"'/\n     '::'     `:'`  ,'(  \\`._____.-'\"'\n        ;,   ;  `.  `. `._`-.  \\\\\n        ;:.  ;:       `-._`-.\\  \\`.\n         '`:. :        |' `. `\\  ) \\\n            ` ;:       |    `--\\__,'\n              '`      ,'\n                   ,-'"
      
        return `
          ${" ".repeat(3)}  / \\__
           ${" ".repeat(3)} (    @\\___
            ${" ".repeat(3)} /         O
          ${" ".repeat(3)} /   (_____/
             ${" ".repeat(3)}/_____/   ${textInput}
        `;
    },
     help: "Usage: asciiDog - Displays a picture of a dog in ascii."
    //help: "Usage: asciiDog <text> - Displays the text in a dog speech bubble."
},
   isLocked: {
        func: async (args) => {
    const path = args.join(" ")      
    if (path === undefined) {
        throw new TypeError("Missing argument: path");
    }
    let node = fs._resolve_path(path);
    if (node.type !== "file") {
        throw new Error("Not a file: " + path);
    }
    return node.locked || "false";
          
          
        },
        help: "Usage: isLocked [file] - Check if a file is locked."
    },
  cowthink: {
        func: async (args) => {
             return await commands.cowsay.func(args, true)
          
          
        },
        help: "Usage: cowthink [message] [-e eyes] [-T tongue] [-f cowfile] - Generates a cowthink ASCII art with the specified message and options."
    },
  searchWord: {
    func: async (args) => {
        const word = args[0]; // Assuming the first argument is the word to search
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            return "Word not found";
        }
        const data = await response.json();
                const results = data.map(entry => {
            let formatted = '';
            entry.meanings.forEach(meaning => {
                formatted += `${meaning.partOfSpeech}\n`;
                meaning.definitions.forEach((def, index) => {
                    formatted += `${index + 1}. ${def.definition}\n`;
                    if (def.example) {
                        formatted += `"${def.example}"\n\n`;
                    }
                });
            });
            return formatted.trim();
        });
        return results.join('\n\n'); // Combine all entries if multiple
    },
    help: "Usage: searchWord [word] - Searches for the definition of the specified word using a free dictionary API."
},
  findSynonyms: {
    func: async (args) => {
        const word = args[0]; // Assuming the first argument is the word to search
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            return "Word not found";
        }
        const data = await response.json();
        const synonyms = data.flatMap(entry => 
            entry.meanings.flatMap(meaning => meaning.synonyms)
        );
        return synonyms.length > 0 ? synonyms.join(', ') : "No synonyms found";
    },
    help: "Usage: findSynonyms [word] - Retrieves synonyms for the specified word using a free dictionary API."
},
  skulpt: {
        func: async (args) => {
            const Sk = (await import("https://esm.sh/skulpt")).default; 
          function  onSchemaError(e) {
    term.output(e.stack)
  }

          const options = {code:[]}
          
 
   function parseFlags() {
      for (let i = 0; i < args.length; i++) {
      if (args[i] === '-f'  && args[i + 1]) {
          options.mode = "file"
          options.file = args[++i];
        } else {
          options.code.push(args[i])
        }
      }
    }
         parseFlags()
if(options.mode === 'file'){
  options.code = fs.cat("", options.file)                     //.replace(/\n+/g, ' ') // Remove newlines
          // .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
  // needed or else this will go into perm loop.
}     
if(options.mode != 'file'){
  
  options.code = options.code.join(" ")
}

        // Configure the Sk object with input and output functions
Sk.configure({
    output: term.output,
    inputfun: term.input,
    inputfunTakesPrompt: true
});

// Function to run the Sk.importMainWithBody in an async context
const runSkImport = async (prog) => {
    try {
        await Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, prog, true));
        console.log('Success');
    } catch (err) {
       throw err
         
    }
};

          console.log(options.code)
// Call the function with the program code
await runSkImport(options.code);
  
          
            
                                
          
        },
        help: "Usage: skulpt [<options>] <script> - Run Python2 code using Skulpt."
    },
   scheme: {
        func: async (args) => {
            const BiwaScheme = (await import("https://esm.sh/biwascheme")).default; 
          function  onSchemaError(e) {
    term.output(e.stack)
  }

          const options = {code:[]}
          
 
   function parseFlags() {
      for (let i = 0; i < args.length; i++) {
      if (args[i] === '-f'  && args[i + 1]) {
          options.mode = "file"
          options.file = args[++i];
        } else {
          options.code.push(args[i])
        }
      }
    }
         parseFlags()
if(options.mode === 'file'){
  options.code = fs.cat("", options.file)                     .replace(/\n+/g, ' ') // Remove newlines
           .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
  // needed or else this will go into perm loop.
}     
if(options.mode != 'file'){
  
  options.code = options.code.join(" ")
}
const results = new BiwaScheme.Interpreter( onSchemaError)

return results.evaluate(options.code)
            
                                
          
        },
        help: "Usage: scheme [<options>] <script> - Run scheme based code."
    },
  llmTools: {
        func: async (args) => {
          
          
          function formatPrompt(tool, userInput) {
    const prompts = {
        textSummarizer: {
            prompt: "As a specialized text summarizer, provide a concise summary highlighting the main arguments, conclusions, and key facts from the following document: {input_text}. Ensure the summary is under 150 words and captures the essence without losing critical information.",
            rules: [
                "Focus on the main ideas and eliminate fluff.",
                "Maintain the original tone and context.",
                "Limit the summary to 150 words."
            ]
        },
        textTranslator: {
            prompt: "Acting as a professional translator, accurately translate the following text from English to {target_language}, ensuring to retain nuances, idioms, and cultural references: {input_text}. Use formal language when applicable.",
            rules: [
                "Keep the translated text faithful to the original meaning.",
                "Use context-appropriate language.",
                "Avoid direct translations of idioms."
            ]
        },
        codeGenerator: {
            prompt: "You are an expert code generator. Based on the following specification, create a clear and efficient code snippet, including comments and documentation as necessary: {description}. Ensure the code adheres to best practices for readability and performance.",
            rules: [
                "Include comments to explain complex sections.",
                "Follow coding standards for the specified language.",
                "Optimize for performance where applicable."
            ]
        },
        dataAnalyzer: {
            prompt: "Functioning as a data analysis expert, thoroughly examine the following CSV dataset. Identify key trends, anomalies, and correlations, and present a summary of insights along with potential implications: {csv_data}. Provide visualizations if relevant.",
            rules: [
                "Use statistical methods to support insights.",
                "Highlight any significant outliers or patterns.",
                "Suggest actionable recommendations based on findings."
            ]
        },
        ideaGenerator: {
            prompt: "As a creative idea generator, brainstorm innovative concepts and actionable strategies based on the following prompt: {prompt}. Focus on feasibility, originality, and potential market impact.",
            rules: [
                "Ensure ideas are realistic and actionable.",
                "Consider current market trends and needs.",
                "Provide a brief rationale for each idea."
            ]
        },
        questionAnswering: {
            prompt: "In the role of a knowledgeable assistant, deliver a comprehensive and well-structured answer to the following question based on this context: {context}. Question: {question}. Provide citations or references if applicable.",
            rules: [
                "Ensure the answer is direct and to the point.",
                "Include supporting information or examples.",
                "Cite sources or data where necessary."
            ]
        },
        "contentEnhancer": {
    "prompt": "As a content enhancer, improve the following text by adding relevant details, enhancing clarity, and correcting any grammatical errors: {input_text}. Ensure the tone is engaging and professional.",
    "rules": [
      "Focus on clarity and coherence.",
      "Maintain the original intent and style.",
      "Check for grammatical and punctuation errors."
    ]
  },
  "keywordExtractor": {
    "prompt": "As a keyword extraction specialist, identify and list the most relevant keywords and phrases from the following text: {input_text}. Prioritize terms that reflect the core themes and concepts.",
    "rules": [
      "Choose keywords that represent the main ideas.",
      "Avoid overly generic terms.",
      "Consider the context of the text."
    ]
  },
  "sentimentAnalyzer": {
    "prompt": "You are a sentiment analysis tool. Analyze the sentiment of the following text: {input_text}. Determine whether the sentiment is positive, negative, or neutral, and provide a brief justification for your assessment.",
    "rules": [
      "Consider the overall tone and language used.",
      "Provide examples from the text to support your conclusion.",
      "Be clear about the sentiment classification."
    ]
  },
  "summaryGenerator": {
    "prompt": "As a summary generator, create an informative summary for the following article: {input_text}. The summary should highlight key points, arguments, and conclusions without personal opinions.",
    "rules": [
      "Focus on the main arguments and evidence.",
      "Keep the summary objective and factual.",
      "Limit the length to a specified number of sentences."
    ]
  },
  "grammarChecker": {
    "prompt": "You are a grammar checker. Review the following text for grammatical accuracy and suggest corrections: {input_text}. Highlight errors and provide explanations for each correction.",
    "rules": [
      "Identify all grammatical, punctuation, and spelling errors.",
      "Provide clear explanations for corrections.",
      "Ensure the suggested text maintains original meaning."
    ]
  },
  "styleEditor": {
    "prompt": "Acting as a style editor, refine the following text to align with a specified style guide (e.g., APA, MLA): {input_text}. Focus on formatting, citation style, and overall consistency.",
    "rules": [
      "Follow the specified style guide closely.",
      "Check for consistency in formatting and citations.",
      "Make suggestions for improving clarity and flow."
    ]
  },
        "outlineCreator": {
    "prompt": "As an outline creator, develop a structured outline for the following topic: {topic}. Include main headings and subheadings that reflect the key points and arguments to be covered.",
    "rules": [
      "Ensure logical progression of ideas.",
      "Include sufficient detail in subheadings.",
      "Limit the outline to a specified number of levels."
    ]
  },
  "presentationBuilder": {
    "prompt": "You are a presentation builder. Create an outline for a presentation based on the following content: {input_text}. Include slide titles, key points, and suggested visuals.",
    "rules": [
      "Focus on clarity and engagement for the audience.",
      "Limit the number of slides for conciseness.",
      "Suggest visuals that enhance understanding."
    ]
  },
  "factChecker": {
    "prompt": "As a fact checker, verify the accuracy of the following statements: {input_text}. Provide sources for each claim and indicate whether the statements are true or false.",
    "rules": [
      "Use reliable sources for verification.",
      "Clearly label each statement as true or false.",
      "Provide citations for all sources used."
    ]
  },
  "emailComposer": {
    "prompt": "You are an email composer. Draft a professional email based on the following information: {input_text}. Ensure the tone is appropriate for the context and that all necessary details are included.",
    "rules": [
      "Maintain a professional and courteous tone.",
      "Include a clear subject line.",
      "Use proper email formatting."
    ]
  },
  "businessPlanWriter": {
    "prompt": "Acting as a business plan writer, develop a concise business plan outline for the following idea: {business_idea}. Include sections such as market analysis, strategy, and financial projections.",
    "rules": [
      "Ensure each section is comprehensive yet concise.",
      "Use industry-standard terminology.",
      "Highlight key metrics and assumptions."
    ]
  },
  "feedbackProvider": {
    "prompt": "As a feedback provider, review the following content: {input_text}. Offer constructive feedback on strengths and areas for improvement, focusing on clarity, coherence, and engagement.",
    "rules": [
      "Be specific in your feedback.",
      "Balance positive comments with constructive criticism.",
      "Provide actionable suggestions for improvement."
    ]
  },
        "researchSummarizer": {
    "prompt": "As a research summarizer, provide a concise summary of the following research paper: {input_text}. Highlight the research question, methodology, findings, and conclusions.",
    "rules": [
      "Focus on the key elements of the research.",
      "Avoid personal opinions or interpretations.",
      "Limit the summary to 200 words."
    ]
  },
        "scenarioPlanner": {
    "prompt": "As a scenario planner, create potential future scenarios based on the following information: {input_text}. Include both optimistic and pessimistic outcomes.",
    "rules": [
      "Consider various influencing factors.",
      "Provide detailed descriptions for each scenario.",
      "Identify possible implications for each outcome."
    ]
  },
        "contentPlanner": {
    "prompt": "As a content planner, devise a strategic content calendar for the following theme: {theme}. Include topics, formats, and suggested publication dates.",
    "rules": [
      "Ensure a variety of content formats (e.g., blog posts, videos, social media).",
      "Align topics with audience interests and seasonal trends.",
      "Limit the calendar to a specified time frame (e.g., one month)."
    ]
  },
  "characterSketcher": {
    "prompt": "You are a character sketcher. Create a detailed character profile based on the following description: {description}. Include personality traits, backstory, and motivations.",
    "rules": [
      "Make the character relatable and believable.",
      "Consider the character's role in the narrative.",
      "Highlight unique aspects that set the character apart."
    ]
  },
  "eventPlanner": {
    "prompt": "As an event planner, outline a detailed plan for organizing the following event: {event_details}. Include logistics, budget considerations, and timeline.",
    "rules": [
      "Ensure all critical components of event planning are covered.",
      "Consider potential challenges and solutions.",
      "Keep the plan organized and clear."
    ]
  },
  "customRecipeCreator": {
    "prompt": "You are a recipe creator. Develop a unique recipe based on the following ingredients: {ingredients}. Include preparation steps and cooking times.",
    "rules": [
      "Ensure the recipe is easy to follow.",
      "Consider dietary restrictions and preferences.",
      "Provide tips for presentation and serving."
    ]
  },
  "brandStoryteller": {
    "prompt": "As a brand storyteller, craft a compelling narrative for the following brand: {brand_name}. Highlight its mission, values, and unique aspects that resonate with the target audience.",
    "rules": [
      "Focus on emotional connection and relatability.",
      "Use a consistent tone that reflects the brand's personality.",
      "Keep the story concise and engaging."
    ]
  },
  "visualContentCreator": {
    "prompt": "You are a visual content creator. Design a concept for a visual campaign based on the following theme: {theme}. Include ideas for visuals, messaging, and target platforms.",
    "rules": [
      "Ensure visuals align with the overall brand identity.",
      "Consider the target audience and platform-specific strategies.",
      "Keep the concept innovative and engaging."
    ]
  },
        "marketingStrategyDeveloper": {
    "prompt": "As a marketing strategy developer, create a comprehensive marketing plan for the following product: {product_name}. Include target audience, key messages, channels, and budget considerations.",
    "rules": [
      "Identify specific target demographics.",
      "Ensure strategies align with business goals.",
      "Provide actionable recommendations for implementation."
    ]
  },
  "userPersonaCreator": {
    "prompt": "You are a user persona creator. Develop detailed user personas based on the following data: {user_data}. Include demographics, behaviors, needs, and pain points.",
    "rules": [
      "Ensure personas are realistic and data-driven.",
      "Highlight key characteristics that influence decision-making.",
      "Limit to a specified number of personas for clarity."
    ]
  },
  "storyboarding": {
    "prompt": "As a storyboard creator, outline a storyboard for the following concept: {concept}. Include key scenes, actions, and dialogues for a visual narrative.",
    "rules": [
      "Ensure a logical flow of events.",
      "Highlight critical moments that drive the story.",
      "Keep descriptions clear and concise."
    ]
  },
  "websiteCopywriter": {
    "prompt": "You are a website copywriter. Write engaging and persuasive copy for the following webpage: {webpage_details}. Ensure the copy aligns with the brand voice and encourages user action.",
    "rules": [
      "Focus on clarity and SEO optimization.",
      "Use calls to action effectively.",
      "Maintain a consistent tone throughout."
    ]
  },
  "lessonPlanCreator": {
    "prompt": "As a lesson plan creator, design a comprehensive lesson plan for the following topic: {topic}. Include objectives, activities, and assessment methods.",
    "rules": [
      "Ensure alignment with educational standards.",
      "Include diverse teaching strategies.",
      "Limit the plan to a specified duration."
    ]
  },
  "dataVisualizationDesigner": {
    "prompt": "You are a data visualization designer. Create a concept for visualizing the following data set: {data_set}. Suggest types of visualizations and key insights to highlight.",
    "rules": [
      "Ensure clarity and ease of understanding.",
      "Choose appropriate visualization types for the data.",
      "Consider the target audience's needs."
    ]
  }, 
       
  "emailNewsletterWriter": {
    "prompt": "As an email newsletter writer, create a captivating newsletter based on the following topic: {topic}. Include engaging headlines, key updates, and calls to action.",
    "rules": [
      "Ensure the content is concise and informative.",
      "Use an engaging and friendly tone.",
      "Include clear sections and visuals where applicable."
    ]
  },
  "productComparisonAnalyzer": {
    "prompt": "You are a product comparison analyzer. Compare the following products: {product_a} and {product_b}. Highlight their features, benefits, and drawbacks to help users make informed decisions.",
    "rules": [
      "Be objective in your analysis.",
      "Use a side-by-side format for clarity.",
      "Include price points and value propositions."
    ]
  },
  "travelItineraryPlanner": {
    "prompt": "As a travel itinerary planner, create a detailed itinerary for the following trip: {trip_details}. Include destinations, activities, and suggested timelines.",
    "rules": [
      "Ensure a balanced mix of activities.",
      "Consider travel times and rest periods.",
      "Include local tips and recommendations."
    ]
  },
  "socialMediaCampaignDesigner": {
    "prompt": "You are a social media campaign designer. Outline a campaign for the following objective: {campaign_objective}. Include target audience, messaging, platforms, and content ideas.",
    "rules": [
      "Align the campaign with overall marketing goals.",
      "Be specific about content types and posting schedules.",
      "Consider engagement strategies for each platform."
    ]
  },
  "softwareReviewWriter": {
    "prompt": "As a software review writer, evaluate the following software: {software_name}. Discuss its features, usability, pricing, and overall effectiveness.",
    "rules": [
      "Be honest and fair in your assessment.",
      "Include pros and cons for easy reference.",
      "Provide recommendations for potential users."
    ]
  },
  "customerJourneyMapper": {
    "prompt": "You are a customer journey mapper. Create a detailed map of the customer journey for the following service: {service_name}. Include touchpoints, pain points, and opportunities for improvement.",
    "rules": [
      "Ensure all stages of the journey are covered.",
      "Identify key moments of truth for the customer.",
      "Highlight areas for enhancing the customer experience."
    ]
  }

    };

    const toolData = prompts[tool];
    if (!toolData) {
        throw new Error("Invalid tool specified.");
    }

    // Replace placeholders in the prompt with user inputs
    let formattedPrompt = toolData.prompt.replace(/\{(\w+)\}/g, (_, key) => userInput[key] || `{${key} not provided}`);
    
    // Format rules
    const formattedRules = toolData.rules.map((rule, index) => `${index + 1}. ${rule}`).join('\n');
    
    return `${formattedPrompt}\n\nRules:\n${formattedRules}`;
}

// Example usage
const userInput = {
    input_text: "Long article about climate change and its socio-economic impacts...",
    target_language: "es",
    description: "Function to sort an array in JavaScript using quicksort.",
    csv_data: "data.csv",
    prompt: "Generate a sustainable business idea.",
    context: "The context goes here.",
    question: "What are the main conclusions drawn?"
};

const formattedPrompt = formatPrompt("textSummarizer", { input_text: userInput.input_text });
 console.log(formattedPrompt)
          console.log("ca;;ed")
return await processCommand(`chatgpt -r "${formattedPrompt}"`)

          
          
          
        },
        help: "Usage: cowthink [message] [-e eyes] [-T tongue] [-f cowfile] - Generates a cowthink ASCII art with the specified message and options."
    },
      snapshot: {
        func: (args) => {
          return "NOT WORKING ATM"
            const command = args[0];
            const snapshotName = args[1];
   
            
            switch (command) {
                case 'create':
                    fs.createSnapshot(snapshotName);
                    return `Snapshot ${snapshotName} created successfully.`;
                case 'restore':
                    try {
                       fs.restoreSnapshot(snapshotName);
                        return `Snapshot ${snapshotName} restored successfully.`;
                    } catch (error) {
                        return error.message;
                    }
                case 'list':
                    return systemBin.listSnapshots().join(', ') || "No snapshots available.";
                default:
                    return "Unknown snapshot command.";
            }
        },
        help: "Usage: snapshot <command> <snapshotName> - Manages snapshots (create, restore, list)."
    },
    lockFile: {
        func: async (args) => {
            const path = args.join(" ") 
          if (path === undefined) {
        throw new TypeError("Missing argument: path");
    }
    let node = fs._resolve_path(path);
    if (node.type !== "file") {
        throw new Error("Not a file: " + path);
    }
    node.locked = true;
          
          
        },
        help: "Usage: lockFile [file] - Lock a file."
    },  
    unlockFile: {
        func: async (args) => {
            const path = args.join(" ") 
          if (path === undefined) {
        throw new TypeError("Missing argument: path");
    }
    let node = fs._resolve_path(path);
    if (node.type !== "file") {
        throw new Error("Not a file: " + path);
    }
    node.locked = false;
          
          
        },
        help: "Usage: unlockFile [file] - Unlock a file."
    },
   unpkg: {
        func: async (args) => {
            
async function loadModule(url) {
  try {
    const response = await fetch(`https://unpkg.com/${url}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const moduleCode = await response.text();
   return moduleCode; // Use eval to execute the module code
   // return module;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}
       const file =  await loadModule(args.join(" "))
       
       fs.cat(">", args.join(" "), file)
          
        },
        help: "Usage: unpkg [url] - Downloads a module from from unpkg"
    },
  xmlToJson: {
    func: async (args) => {
        const { parseStringPromise } = (await import('https://esm.sh/xml2js')).default;

        const xmlInput = args[0]; // XML string
        const jsonData = await parseStringPromise(xmlInput);
        return JSON.stringify(jsonData, null, 2);
    },
    help: "Usage: xmlToJson <xml-string> - Converts XML data to JSON format."
},
  convert: {
    func: async (args) => {
        const options = {
            fromFormat: null,  // Format to convert from
            toFormat: null,    // Format to convert to
            inputData: '',     // Data to convert
            outputFile: null   // Output file name
        };

        // Function to parse flags from args
        function parseFlags(args, options) {
            for (let i = 0; i < args.length; i++) {
                if (args[i] === '-f' && args[i + 1]) {
                    options.fromFormat = args[++i]; // Specify input format
                } else if (args[i] === '-t' && args[i + 1]) {
                    options.toFormat = args[++i]; // Specify output format
                } else if (args[i] === '-o' && args[i + 1]) {
                    options.outputFile = args[++i]; // Specify output file
                } else {
                    options.inputData += args[i] + ' '; // Collect input data
                }
            }
        }

        // Parse the command-line arguments
        parseFlags(args, options);
        options.inputData = options.inputData.trim(); // Clean up input data

        // Import necessary libraries
        const json2CSV = (await import('https://esm.sh/json-2-csv')).default;
        const csv = (await import('https://esm.sh/csvtojson')).default;
        const { parseStringPromise, Builder } = (await import ('https://esm.sh/xml2js')).default;
        const yaml = (await import('https://esm.sh/js-yaml')).default;

        // Convert function
        async function convert(data, fromFormat, toFormat) {
            switch (fromFormat) {
                case 'json':
                    data = JSON.parse(data)
                    if (toFormat === 'csv') {
                      // convert -f json -t csv '{"name":"John", "age":30, "city":"New York"}'
                        return jsonToCsv(data);
                    } else if (toFormat === 'xml') {
                      // 
                        return jsonToXml(data);
                    } else if (toFormat === 'yaml') {
                      // convert -f json -t yaml '{"name":"John", "age":30, "city":"New York"}'
                        return jsonToYaml(data);
                    }
                    break;
                case 'csv':
                    if (toFormat === 'json') {
                      // convert -f csv -t json -o output.json 'name,age,city\nJohn,30,New York'

                        return await csvToJson(data);
                    }
                    break;
                case 'xml':
                    if (toFormat === 'json') {
                      // convert -f xml -t json -o output.json '<person><name>John</name><age>30</age><city>New York</city></person>'

                        return xmlToJson(data);
                    } else if (toFormat === 'yaml') {
                        const jsonData = await xmlToJson(data);
                        return jsonToYaml(jsonData);
                    }
                    break;
                case 'yaml':
                // convert -f yaml -t json -o output.json 'name: John\nage: 30\ncity: New York'
                    if (toFormat === 'json') {
                        return yamlToJson(data);
                    }
                    break;
                default:
                    throw new Error(`Unsupported conversion from ${fromFormat} to ${toFormat}`);
            }
        }

        async function jsonToCsv(json) {
            return await json2CSV.json2csv([json]);
        }

        async function csvToJson(csvData) {
            return await csv().fromString(csvData);
        }

        async function xmlToJson(xmlData) {
            return await parseStringPromise(xmlData);
        }

        function jsonToXml(json) {
            const builder = new Builder();
            return builder.buildObject(json);
        }

        function jsonToYaml(json) {
            return yaml.dump(json);
        }

        function yamlToJson(yamlData) {
            return yaml.load(yamlData);
        }

        // Perform the conversion
        try {
            const result = await convert(options.inputData, options.fromFormat, options.toFormat);
          console.log(result)
            if (options.outputFile) {
                // Code to save result to outputFile (not implemented here)
            } else {
                return result; // Return the converted data
            }
        } catch (error) {
            console.error('Conversion Error:', error.message);
        }
    },
    help: "Usage: convert -f <fromFormat> -t <toFormat> [-o outputFile] <data> - Converts data between specified formats."
  },
  open: {
        func: async (args, _options) => {
          args.push("-u")
          const weburl = args 
          
          commands.webview.func(weburl, _options)
          
          
        },
        help: "Usage: open [URL] - Opens a URL in a webview iframe."
    },
   uppercase: {
        func: async (args) => {
             
          
             return args.join(" ").toUpperCase()
          
          
        },
        help: "Usage: uppercase [string] - Convert a string to all uppercase."
    },
     lowercase: {
        func: async (args) => {
             
          
             return args.join(" ").toLowerCase()
          
          
        },
        help: "Usage: lowercase [string] - Convert a string to all lowercase."
    },
 glob: {
        func: async (args) => {
             const micromatch = (await import ('https://esm.sh/micromatch')).default;
          const text = args[0]
          args.shift()
          
          return micromatch(text, args) 
          
        },
        help: "Usage: glob [string] [pattern] - Match a pattern using glob matching."
    },
    weather: {
        func: async (args) => {
           
          if(args.length === 0){
            throw new Error("<location> must be provided.")
          }
          
          const fetchLatLong = async (location) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        if (data.length === 0) {
            throw new Error("Location not found.");
        }
        const { lat, lon, display_name } = data[0];
        return { latitude: parseFloat(lat), longitude: parseFloat(lon), display_name };
    } catch (error) {
        console.error("Failed to fetch coordinates:", error);
        throw error;
    }
};
          
        const fetchWeather = async (latitude, longitude) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
        throw error;
    }
};
          
          const formatWeatherResponse = (data, display_name) => {
    const { current_weather } = data;
    
    if (!current_weather) {
        return "No weather data available.";
    }

    const { temperature, windspeed, winddirection, is_day, time } = current_weather;
    const dayStatus = is_day ? "Day" : "Night";
    const formattedTime = new Date(time).toLocaleString();

    return `
Current Weather:
-------------------------
Place: ${display_name}
Temperature: ${temperature} °C
Windspeed: ${windspeed} km/h
Wind Direction: ${winddirection}°
Time: ${formattedTime} (${dayStatus})
-------------------------
`;
};

     const {latitude, longitude, display_name} = await fetchLatLong(args.join(" "))
    
             
          
// Example usage:
const weatherData = await fetchWeather(latitude, longitude);
 
return formatWeatherResponse(weatherData, display_name)

          
          
        },
        help: "Usage: weather <location> - Returns a weather report for a provided location."
    },
   units: {
    func: async (args) => {
        const convert = (await import('https://esm.sh/convert-units')).default;

        const options = {
            amount: 1,
            unitFrom: null,
            unitTo: null,
        };

        // Parse flags and their values
        for (let i = 0; i < args.length; i++) {
            if (args[i] === '-a' && args[i + 1]) {
                options.amount = args[++i];
            } else if (args[i] === '-f' && args[i + 1]) {
                options.unitFrom = args[++i];
            } else if (args[i] === '-t' && args[i + 1]) {
                options.unitTo = args[++i];
            } else if (args[i] === '-l') {
                options.list = true
            }
        }

         if(options?.list === true){
           return convert().possibilities()
         }
      
        // Validate input
        if (options.amount === null || options.unitFrom === null || options.unitTo === null) {
            throw new TypeError("Usage: units -a <amount> -f <unit_from> -t <unit_to>");
        }

        const changeUnit = (amount, unitFrom, unitTo) => {
            try {
                const convertValue = convert(amount).from(unitFrom).to(unitTo);
                return `${amount} ${convert().describe(unitFrom).plural} (${convert().describe(unitFrom).abbr}) is equal to ${convertValue} ${convert().describe(unitTo).plural} (${convert().describe(unitTo).abbr}).`;
            } catch (error) {
                return `Error: ${error.message}`;
            }
        };

        return changeUnit(options.amount, options.unitFrom, options.unitTo);
    },
    help: `
Usage: units -a <amount> -f <unit_from> -t <unit_to>

Convert units from one measurement to another.

Options:
  -a <amount>    Specify the amount to convert (default: 1).
  -f <unit_from> Specify the unit to convert from.
  -t <unit_to>   Specify the unit to convert to.
  -l             List available units to convert too.
Examples:
  units -a 10 -f yd -t ft             # Converts 10 yards to feet.
  units -a 5 -f l -t gal              # Converts 5 liters to gallons.
`
    },
   screen: {
        func: async (args) => {
          
          const options = {method:''}
            let storedScreen = fs.exports["STORED_SCREEN"]
          
           
            
                // Function to parse flags from args
    function parseFlags(args) {
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '-close'  && args[i + 1])  {
          options.method = "close"
          options.screenName =  args[++i]
         
        } else if (args[i] === '-open'  && args[i + 1]) {
          options.method = "open"
          options.screenName =  args[++i]
        } else if (args[i] === '-close') {
          options.method = "close"
        }else if (args[i] === '-open') {
          options.method = "open"
        }else if (args[i] === '-delete' && args[i + 1]) {
                    options.method = "delete";
                    options.screenName = args[++i];
         } else if (args[i] === '-list') {
                    options.method = "list";
         }else {
          // Assuming remaining args are ASCII art lines
          //options.text.push(args[i])
       
        }
      }
    }
          
          parseFlags(args)
 
 const validMethod = ['list', 'open', 'close', 'delete']         
          
 if(!validMethod.includes(options.method)) {
   throw new TypeError("Invalid usage.")
 }        
          
 let storedScreenName;
          
 if(options?.screenName){
  storedScreenName = `STORED_SCREEN_${options.screenName}`
 }         
          
   if(options?.screenName && options.method === "open" && !fs.exports[`STORED_SCREEN_${options?.screenName}`]){
     throw new TypeError(`${options.screenName} was not found.`)
   }       
     

function screenManager(){          
  return {
    open: () => {
   //   console.log( storedScreen)
      // Store the current screen content
       if(!storedScreen){
              fs.export("STORED_SCREEN" , document.querySelector('.termino-console').innerHTML)
      }
      
    
     

      // Clear the console
      term.clear();
       if(options?.screenName){
          document.querySelector('.termino-console').innerHTML =  fs.exports[storedScreenName]
       
 
      }
    },
    close: () => {
   
    
       if(options?.screenName){
      fs.export(storedScreenName ,document.querySelector('.termino-console').innerHTML) 
      }
      
      // Restore the stored screen content
      document.querySelector('.termino-console').innerHTML = fs.exports['STORED_SCREEN']
      if(!options?.screenName){
      fs.export('STORED_SCREEN', null)
      }
    },
     delete: () => {
                    if (options.screenName) {
                      if(!fs.exports[storedScreenName]){
                        throw new TypeError("Screen name was not found")
                      }
                        fs.export(storedScreenName, null); // Clear the stored screen
                        return `${options.screenName} has been deleted.`;
                    } else {
                        throw new TypeError("Screen name must be provided to delete.");
                    }
                },
     list: () => {
                    const screens = Object.keys(fs.exports).filter(key => key.startsWith("STORED_SCREEN_"));
                    if (screens.length > 0) {
                        const screenList = screens.map(screen => screen.replace("STORED_SCREEN_", "")).join(", ");
                        return `Available screens: ${screenList}`;
                    } else {
                        return "No screens available.";
                    }
                },
  };
}   
         
     const resultMessage = screenManager()[options.method]();
        if (resultMessage) {
            return resultMessage;
        }
          
          
        },
        help: `
Usage: screen [options]

Options:
  -open screenName    Open the specified screen.
  -close screenName   Close the specified screen and restore the previous content.
  -delete screenName  Delete the specified screen.
  -list               List all available screens.

Examples:
  screen -open              # Opens a new screen.
  screen -open myScreen     # Opens the screen named "myScreen".
  screen -close myScreen    # Closes the screen named "myScreen" & saves it.
  screen -delete myScreen   # Deletes the screen named "myScreen".
  screen -list              # Lists all available screens.
`
    },
   git: {
        func: async (args) => {
      
          const options = {
            method:null
          }
          
          // Function to parse flags from args
    function parseFlags(args) {
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '--async') {
          //options.async = true;
        } else if (args[i] === 'clone'  && args[i + 1]) {
          options.method = args[i]
          options.repo =  args[++i]
        } else if (args[i] === 'status'  && args[i + 1]) {
          options.method = args[i]
          options.repo =  args[++i]
        } else {
          // Assuming remaining args are ASCII art lines
          //options.text.push(args[i])
       
        }
      }
    }
          
          parseFlags(args)
        
          const GitUrlParse = (await import("https://esm.sh/git-url-parse")).default;
            
            
            const { Octokit } = (await import("https://esm.sh/@octokit/rest"))
          
if(options.method === "status"){
  
   
   if (!options.repo) {
            return "Repository is required.";
        }

        const details = GitUrlParse(options.repo);
        const { owner, name } = details;
        const octokit = new Octokit();

       
            const { data: commits } = await octokit.repos.listCommits({
                owner,
                repo: name,
                per_page: 1 // Get latest commit
            });

            const latestCommit = commits[0];
            return `Latest commit: ${latestCommit.commit.message} (${latestCommit.sha})`;
  
  
}
          
          
          if(options.method === "clone"){
      
const myToken = null; // https://github.com/settings/tokens

            
const octokit = new Octokit();

async function getAllFileContents(owner, repo, path, makeRoot=true) { 
  const { data: files } = await octokit.repos.getContent({ owner, repo, path });
  if(files.length != 0 && makeRoot){
    fs.mkdir(repo)
  }
  
  const cwd = fs.pwd()
  const repoURL = `https://github.com/${owner}/${repo}/tree/main`
  
  
  for (const file of files) {
   // .split("/").pop()
    const repoFilePath = file?.html_url.split("/").pop()
    let filePathOut = ''
    if(!makeRoot){
      //filePathOut += `/${repo}`
    }
    if (file.type === "file") {
      const { data: fileContent } = await octokit.repos.getContent({ owner, repo, path: file.path });
      
      
      
      
        filePathOut += `/${file.name}`
        
        //console.log(file)
        
      fs.cat(">", repo + filePathOut, Buffer.from(fileContent.content, 'base64').toString())
     
    }
    
    if (file.type === "dir") {
       const dirPath = repo + `/${file.path}`
      
       fs.mkdir(dirPath)
       await getAllFileContents(owner, repo, file.path, false)
    }
    
  }
}


            
       const details =  GitUrlParse(options.repo)
            
 

            
              try {
                await getAllFileContents(details.owner, details.name, "");
                return `Cloning repository ${options.repo} completed.`;
            } catch (error) {
                return `Error cloning repository: ${error.message}`;
            }
       
 /*      const {
	getDirectoryContentViaTreesApi,
	getDirectoryContentViaContentsApi
} = (await import('https://esm.sh/list-github-dir-content'))

       
// They have the same output
       
 const filesArray = await getDirectoryContentViaTreesApi({
	user: details.owner,
	repository: details.name,
	directory: 'src',
  ref:details.ref.trim() || "main",
	token: myToken,
  getFullData:true,
});*/
              
          } 
          
      if(options.method === "commit"){
        
        async function commitFiles() {
  const owner = "<USER OR ORGANIZATION NAME>"; // Replace with your GitHub username or org
  const repo = "<REPOSITORY NAME>"; // Replace with your repository name

  try {
    // Step 1: Get the latest commits
    const commits = await client.repos.listCommits({
      owner,
      repo,
    });

    const commitSHA = commits.data[0].sha;

    // Step 2: Prepare files to be committed
    const files = [
      {
        name: "test.md",
        contents: "Hello World"
      },
      {
        name: "time.txt",
        contents: new Date().toString()
      }
    ];

    
    /*
    File = '100644'
ExecutableFile = '100755'
Directory = '040000'
Submodule = '160000'
Symlink = '120000'
*/ 
    // Transform files into the correct format
    const commitableFiles = files.map(({ name, contents }) => ({
      path: name,
      mode: '100644',
      type: 'blob',
      content: contents
    }));

    // Step 3: Create a new tree
    const { data: { sha: currentTreeSHA } } = await client.git.createTree({
      owner,
      repo,
      tree: commitableFiles,
      base_tree: commitSHA
    });

    // Step 4: Create a new commit
    const { data: { sha: newCommitSHA } } = await client.git.createCommit({
      owner,
      repo,
      tree: currentTreeSHA,
      message: `Updated programmatically with Octokit`,
      parents: [commitSHA]
    });

    // Step 5: Push the commit
    await client.git.updateRef({
      owner,
      repo,
      ref: "heads/main", // Replace with your branch name if different
      sha: newCommitSHA
    });

    console.log('Files committed successfully!');
  } catch (error) {
    console.error('Error committing files:', error);
  }
}

        
        
        
      }    
       
          
          
          return `Method not found.`
        },
        help: "Usage: git [options] - A poor implemenation of the Git Command."
    },
  hackreveal: {
        func: async (args, _options) => {
          
           function generateRandomId() {
      return 'hack-reveal' + Math.random().toString(36).substr(2, 9);
    }
          
              let options = {
      async: false, // Default to synchronous
      iterationsBeforeReveal: 20, // Default time for iterations
      alphabet: "ascii", // type for animation
      text:[]         
    };

    // Function to parse flags from args
    function parseFlags(args) {
      for (let i = 0; i < args.length; i++) {
        if (args[i] === '--async') {
          options.async = true;
        } else if (args[i] === '-i' && args[i + 1]) {
          options.iterationsBeforeReveal = parseInt(args[++i], 10);
        } else if (args[i] === '-t'  && args[i + 1]) {
          options.alphabet = args[++i]
        } else {
          // Assuming remaining args are ASCII art lines
          options.text.push(args[i])
       
        }
      }
    }

          
          parseFlags(args)
          
          
          if(options.text.length === 0){
            throw new Error(`${commands[_options.command].help}`)
          }
          
                  let msg = document.createElement('div')
                  msg.id = generateRandomId()
              // Original recipe from: https://codepen.io/ivandaum/pen/WRxRwv
// License: MIT

const ALPHABETS = {
    ascii: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    base64: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/",
    letters: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
};

/**
 * Applies a hack / reveal effect to a <p>.
 *
 * @param {HTMLParagraphElement} paragraph a reference to a <p>
 */
let paragraph;          

   let terminoConsole = document.querySelector('.termino-console')           
   const observer = new MutationObserver(() => {
          paragraph = document.querySelector(`#${msg.id}`); 
          terminoConsole = document.querySelector('.termino-console'); // Use random ID to find element
        });           
function hackRevealText(text, options={}) { 
 return new Promise((resolve) => {
    const alphabet = ALPHABETS[ options?.alphabet || "ascii" ];
    const iterationsBeforeReveal = options.iterationsBeforeReveal ? Number( options.iterationsBeforeReveal ) : 20;
    const initialText = text
    let globalCount = 0;
    let count = 0;
    paragraph.innerHTML = makeRandText( initialText, alphabet, options.preserveSpaces );
    const interv = setInterval( () => {
      try{
        paragraph.innerHTML = makeRandText( initialText, alphabet, options.preserveSpaces, count );
      }catch(err){
        observer.disconnect()
        clearInterval( interv );
        resolve()
      }
        if ( globalCount >= iterationsBeforeReveal ) {
            count++;
        }
        if ( count > initialText.length) {
            observer.disconnect()
            clearInterval( interv );
            resolve()
        }
        globalCount++;
    }, 50 );
 })
}

function getRandLetter( alphabet ) {
    return alphabet[ Math.floor( Math.random() * alphabet.length ) ];
}

function makeRandText( text, alphabet, preserveSpaces, count ) {
    let finalWord = "";
    for ( let i = 0; i < text.length; i++ ) {
        if ( i < count ) {
            finalWord += text[ i ];
        } else {
            finalWord += ( preserveSpaces && text[ i ] === " " ) ? " " : getRandLetter( alphabet );
        }
    }
    return finalWord;
}
          
        
          
          paragraph = msg
          
         

        observer.observe(document.body, { childList: true, subtree: true });
          
          
          
          terminoConsole.appendChild(paragraph, options)
          
          options.text = options.text.join(" ")
    
          if(options.async){
          await hackRevealText(options.text, options)
          }
          if(!options.async){
          hackRevealText(options.text, options)
          }
          
          
        },
        help: "Usage: hackreveal [message] [-i iterations] [--async  async] [-t type] - Append a message to console to be revealed with hacker style.."
    },
    currency: {
    func: async (args) => {
        const options = {
            amount: null,
            fromCurrency: null,
            toCurrency: null,
        };

        // Parse flags and their values
        for (let i = 0; i < args.length; i++) {
            if (args[i] === '-a' && args[i + 1]) {
                options.amount = parseFloat(args[++i]);
            } else if (args[i] === '-f' && args[i + 1]) {
                options.fromCurrency = args[++i].toUpperCase();
            } else if (args[i] === '-t' && args[i + 1]) {
                options.toCurrency = args[++i].toUpperCase();
            }
        }

        // Validate input
        if (options.amount === null || options.fromCurrency === null || options.toCurrency === null) {
            throw new TypeError("Usage: currency -a <amount> -f <from_currency> -t <to_currency>");
        }

        const fetchExchangeRate = async (fromCurrency, toCurrency) => {
            const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} - ${response.statusText}`);
                }
                const data = await response.json();
                const rate = data.rates[toCurrency];
                if (!rate) {
                    throw new Error(`Currency ${toCurrency} not found.`);
                }
                return rate;
            } catch (error) {
                console.error("Failed to fetch exchange rate:", error);
                throw error;
            }
        };

        try {
            const rate = await fetchExchangeRate(options.fromCurrency, options.toCurrency);
            const convertedAmount = (options.amount * rate).toFixed(2);
            return `${options.amount} ${options.fromCurrency} is equal to ${convertedAmount} ${options.toCurrency} (Rate: ${rate}).`;
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: `
Usage: currency -a <amount> -f <from_currency> -t <to_currency>

Convert currency from one denomination to another.

Options:
  -a <amount>     Specify the amount to convert.
  -f <from_currency> Specify the currency to convert from (e.g., USD).
  -t <to_currency>   Specify the currency to convert to (e.g., EUR).

Examples:
  currency -a 100 -f USD -t EUR       # Converts 100 USD to EUR.
  currency -a 50 -f GBP -t JPY        # Converts 50 GBP to JPY.
`
},

  joke: {
    func: async () => {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        return `${data.setup} - ${data.punchline}`;
    },
    help: "Usage: joke - Fetches a random joke."
},
  
  palindrome: {
    func: (args) => {
        const text = args.join(" ").replace(/[\W_]/g, '').toLowerCase();
        const isPalindrome = text === text.split('').reverse().join('');
        return isPalindrome ? "The text is a palindrome." : "The text is not a palindrome.";
    },
    help: "Usage: palindrome <text> - Checks if the given text is a palindrome."
},
 countWords: {
    func: (args) => {
        const text = args.join(" ");
        const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
        return `Word Count: ${wordCount}`;
    },
    help: "Usage: count-words <text> - Counts the number of words in the given text."
},

  jsonMerge: {
    func: (args) => {
        const merged = args.map(JSON.parse).reduce((acc, curr) => {
            return { ...acc, ...curr };
        }, {});
        return JSON.stringify(merged, null, 2);
    },
    help: "Usage: jsonMerge <json1> <json2> ... - Merges multiple JSON objects."
},
  
  markdown: {
    func: async (args) => {
      const {marked} = (await import('https://esm.sh/marked')) ;


        const options = {
            file: null,
        };

        // Parse flags and their values
        for (let i = 0; i < args.length; i++) {
            if (args[i] === '-f' && args[i + 1]) {
                options.file = args[++i];
            }
        }

        // Validate input
        if (options.file === null) {
            throw new TypeError("Usage: markdown -f <file.md>");
        }

        const convertMarkdownToHTML = async (file) => {
            try {
                const markdownContent = fs.cat("", file);
                const htmlContent = marked(markdownContent);
                return htmlContent;
            } catch (error) {
                console.error("Failed to read file or convert:", error);
                throw error;
            }
        };

        try {
            const html = await convertMarkdownToHTML(options.file);
            return html; // Output the HTML
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: `
Usage: markdown -f <file.md>

Convert a Markdown file to HTML.

Options:
  -f <file.md>    Specify the Markdown file to convert.

Examples:
  markdown -f example.md   # Converts example.md to HTML.
`
},

   wallstreetbets: {
        func: async (args) => {
              
          
          const options = {}
          
            
            for (let i = 0; i < args.length; i++) {
                if (args[i] === '-d' && args[i + 1]) {
                    options.date = args[++i];
                } else if (args[i] === '-f' && args[i + 1]) {
                    options.filter = args[++i]
                } 
            }

          
          
          /**
 * Formats and filters stock data for CLI display.
 * 
 * @param {Array} data - Array of stock objects to format.
 * @param {string} [filter] - Optional sentiment filter ("Bearish" or "Bullish").
 * @param {boolean} [sortAsc=false] - Optional sort order; if true, sorts ascending, otherwise descending.
 * @returns {Array} - Formatted and filtered array of stock objects.
 */
function formatStocks(data, filter = null, sortAsc = false) {
    // Validate filter
    const validSentiments = ['bearish', 'bullish'];
    if (filter && !validSentiments.includes(filter.toLowerCase())) {
        throw new Error(`Invalid sentiment filter. Valid options are: ${validSentiments.join(', ')}`);
    }

    // Filter data by sentiment if a filter is provided
    let filteredData = data;
    if (filter) {
        filteredData = data.filter(stock => stock.sentiment.toLowerCase() === filter.toLowerCase());
    }

    // Sort data by sentiment_score
    filteredData.sort((a, b) => sortAsc ? a.sentiment_score - b.sentiment_score : b.sentiment_score - a.sentiment_score);

    return filteredData;
}
          
 /**
 * Verifies if the given date string is in the format YYYY-MM-DD.
 * 
 * @param {string} dateStr - The date string to verify.
 * @returns {boolean} - True if the date string is in the correct format, false otherwise.
 */
function isValidDateFormat(dateStr) {
    // Regular expression for YYYY-MM-DD format
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    
    // Test the date format
    if (!regex.test(dateStr)) return false;
    
    // Additional check to verify if the date is a valid calendar date
    const [year, month, day] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    // Check if the date is valid
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}
          
 /**
 * Fetches JSON data from the specified URL for data.
 * 
 * @returns {Promise<Object>} - A promise that resolves to the fetched data.
 */
async function fetchRedditData(date = null) {
    let url = 'https://corsproxy.io/?https://tradestie.com/api/v1/apps/reddit';

    if(date){
      url += `?date=${date}` // 2022-04-03
    }
  
  
  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if(data.length === 0){
          throw new TypeError("No data was found.")
        }
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}         
          
    
   if(options.date){
     const validDate = isValidDateFormat(options.date)
     if(!validDate){
       throw new TypeError("Invalid date format. Format: YYYY-MM-DD.")
     }
   }       
          
          
    const data = await fetchRedditData(options.date)
          
    const filtered = formatStocks(data, options.filter, options.date).filter(item => item.sentiment !== null && item.sentiment_score !== null);
    
    const formattedStocks = filtered.map(({ no_of_comments, sentiment, sentiment_score, ticker }) => 
  `Ticker: ${ticker}, Sentiment: ${sentiment}, Score: ${sentiment_score.toFixed(3)}, Comments: ${no_of_comments}`
);

return formattedStocks.join('\n');
    
          
        },
        help: `
Usage: wallstreetbets [options]

Description:
  Retrieve the top 50 stocks discussed on the WallStreetBets subreddit.

Options:
  -d <date>    Specify the date for the data (default: today). Format: YYYY-MM-DD.
  -f <filter>  Filter by sentiment ['bearish', 'bullish']. Default: both.

Examples:
  wallstreetbets -d 2022-04-03
  wallstreetbets -f bullish
  wallstreetbets -d 2022-04-03 -f bearish` 
    },
     watch: {
        func: async (args) => {
           function watchFile(filePath, callback) {
    // Track the file's modification time
    let lastModifiedTime = fs.stat(filePath).mtimeMs;

    // Use fs.watch to watch for changes
    const watcher = fs.watch(filePath, (eventType) => {
        if (eventType === 'change') {
            // Get the current modification time
            const currentModifiedTime = fs.stat(filePath).mtime;

            // Trigger the callback if the file was actually modified
            if (currentModifiedTime !== lastModifiedTime) {
                lastModifiedTime = currentModifiedTime;
                callback({ mtime: currentModifiedTime }, { mtime: lastModifiedTime });
            }
        }
    });

    // Return a function to close the watcher when no longer needed
    return () => {
        watcher.close();
    };
}
          
          const filePath = args.join(" ")
          
          const unwatch = watchFile(filePath, (curr, prev) => {
    
    //compileAndWrite(); // Your function to handle file change
});

// To stop watching the file later, call `unwatch` function
// unwatch();
          
        },
        help: "Usage: cowthink [message] [-e eyes] [-T tongue] [-f cowfile] - Generates a cowthink ASCII art with the specified message and options."
    },
  env: {
    func: (args) => {
        if (args[0] === 'set' && args[1] && args[2]) {
            Deno.env.set(args[1], args[2]);
            return `Environment variable ${args[1]} set to ${args[2]}.`;
        } else if (args[0] === 'list') {
            return Object.entries(Deno.env.toObject()).map(([key, value]) => `${key}: ${value}`).join("\n");
        } else {
            return "Usage: env set <key> <value> | env list";
        }
    },
    help: "Usage: env set <key> <value> - Sets an environment variable. | env list - Lists environment variables."
},
  env: {
    func: () => {
        return Object.entries(fs.exports).map(([key, value]) => `${key}=${value}`).join("\n");
    },
    help: "Usage: env - Displays the current environment variables."
},
  convertTemp: {
    func: (args) => {
        const value = parseFloat(args[0]);
        const fromUnit = args[1].toLowerCase();
        const toUnit = args[2].toLowerCase();

        let result;

        // Conversion logic
        if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
            result = (value * 9/5) + 32;
        } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
            result = (value - 32) * 5/9;
        } // Additional conversions can be added here.

        return result !== undefined ? `${value} ${fromUnit} is ${result} ${toUnit}` : "Invalid conversion.";
    },
    help: "Usage: convert-temp <value> <from_unit> <to_unit> - Converts temperatures between units."
},
  exec: {
    func: async (args) => {
        const command = args.join(" ");
        return await processCommand(command)
    },
    help: "Usage: exec <command> - Executes the specified system command."
},
   mespeak: {
        func: async (args) => {
          
        const text = args.join(" ")  
           // Import meSpeak module
    const meSpeak =  (await import('https://esm.sh/mespeak')).default;

          
        
    // Import enUSData JSON
    const enUSData =  (await import('https://esm.sh/mespeak/voices/en/en-us.json', {
      assert: { type: 'json' }
    })).default

    // Import config JSON
    const config = (await import('https://esm.sh/mespeak/src/mespeak_config.json', {
      assert: { type: 'json' }
    })).default

    // Use the imported modules
    if(!window.meSpeak){
    window.meSpeak = meSpeak;
    }
   if(!meSpeak.isConfigLoaded()){       
    meSpeak.loadConfig(config)
   //Select english/american voice
   meSpeak.loadVoice( enUSData)  
    }
          
//
          
            
  // JSON schema for multi text speech.
/* const text = [
    { text: "Travel to",      voice: "en/en-us", variant: "m3" },
 
  { text: "at light speed", voice: "en/en-us", variant: "m3" }
];*/

// Configure `speakMultipart` options
const options = {
  onStart: () => term.output('Speech started'),
  onEnd: () => term.output('Speech ended'),
};

          
 // Function to convert Base64 string to Blob
function base64ToBlob(base64, mimeType) {
    // Decode Base64 to binary
    const byteCharacters = atob(base64);
    const byteNumbers = new Uint8Array(byteCharacters.length);
    
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    
    // Create a Blob from the binary data
    return new Blob([byteNumbers], { type: mimeType });
}

// Usage
     
// Function to speak the text
function speakText(text, multi=false) {
if(multi){  
meSpeak.speakMultipart(text);
}
if(!multi){
  const results =  new Blob([meSpeak.speak(text, {rawdata: "buffer"}), { type: "audio/wav" }]);
  window.meSpeak = null;
 return
     //
  return meSpeak.speak(text, {rawdata: "base64"})
}  
  
}

// Call the function
return speakText(text);
          
          
        },
        help: "Usage: cowthink [message] [-e eyes] [-T tongue] [-f cowfile] - Generates a cowthink ASCII art with the specified message and options."
    },
    mespeak2: { 
    func: async (args) => {
        const options = {
            voice: 'en/en-us',  // Default voice
            speed: 175,         // Default speed
            pitch: 50,          // Default pitch
            outputFile: null,   // Output file name
            ssml: false,     // SSML file name
            text: []            // Text to speak
        };

      function parseFlags(args) {
    for (let i = 0; i < args.length; i++) {
        switch (args[i]) {
            case '-v':
                if (args[i + 1]) {
                    options.voice = args[++i];
                } else {
                    console.error("No value provided for -v.");
                }
                break;
            case '-s':
                if (args[i + 1]) {
                    options.speed = parseInt(args[++i], 10);
                    if (isNaN(options.speed)) {
                        console.error("Invalid value for -s, must be a number.");
                        options.speed = 175; // Default speed
                    }
                }
                break;
            case '-p':
                if (args[i + 1]) {
                    options.pitch = parseInt(args[++i], 10);
                    if (isNaN(options.pitch)) {
                        console.error("Invalid value for -p, must be a number.");
                        options.pitch = 50; // Default pitch
                    }
                }
                break;
            case '-w':
                if (args[i + 1]) {
                    options.outputFile = args[++i];
                } else {
                    console.error("No value provided for -w.");
                }
                break;
            case '-f':
                if (args[i + 1]) {
                    options.ssmlFile = args[++i];
                } else {
                    console.error("No value provided for -f.");
                }
                break;
            default:
                // Assuming remaining args are text to speak
                options.text.push(args[i]);
                break;
        }
    }
}

      
        // Parse the command-line arguments
        parseFlags(args);

        const text = options.text.join(" ");  

        // Import meSpeak module
        const meSpeak = (await import('https://esm.sh/mespeak')).default;

      const voiceOptions = options.voice.split('/')
        // Import enUSData JSON
        const enUSData = (await import(`https://esm.sh/mespeak/voices/${voiceOptions[0]}/${voiceOptions[1]}.json`, {
            assert: { type: 'json' }
        })).default;

        // Import config JSON
        const config = (await import('https://esm.sh/mespeak/src/mespeak_config.json', {
            assert: { type: 'json' }
        })).default;

        // Use the imported modules
        if (!window.meSpeak) {
            window.meSpeak = meSpeak;
        }

        if (!meSpeak.isConfigLoaded()) {       
            meSpeak.loadConfig(config);
            meSpeak.loadVoice(enUSData);
        }

        // Configure `speakMultipart` options
        const speakOptions = {
            onStart: () => term.output('Speech started'),
            onEnd: () => term.output('Speech ended'),
            pitch: options.pitch,
            speed: options.speed,
            voice: options.voice
        };

    // Function to speak the text
        function speakText(text) {
            if (options.ssml) {
                // Handle SSML if a file is provided
                // Load and speak the SSML file (not implemented here)
            } else {
                // Speak the text
                if (options.outputFile) {
                  const file = new Blob([meSpeak.speak(text, {rawdata: "buffer", ...speakOptions}), { type: "audio/wav" }]);
                 //const file =   new Blob([meSpeak.speak(text, { rawdata: "buffer", ...speakOptions })], "audio/wav");
                    // Code to save to outputFile   
                  fs.cat(">", options.outputFile,file)
                  
                } else {
                   meSpeak.speak(text, { ...speakOptions });
                }
            }
        }

        // Call the function
        return speakText(text);
    },
    help: "Usage: mespeak [text] [-v voice] [-s speed] [-p pitch] [-w output.wav] [-f ssmlfile.xml] - Speaks the given text with specified options."
},
    newfilename: {
        func: async (args, options) => {
            if(args.length < 1){
              throw new Error(commands[options.command].help)
            }
            let fileName = args.join(" ")
            
            function getFileName(index=0){
             if(!fs.fileExists(fileName)){
               return fileName
             }
              fileName  = `${path.parse(fileName).name} (${index})${path.extname(fileName)}`
              index += 1
              return getFileName(index)
            }
          //
          
          return getFileName()
          //
          
          
        },
        help: "Usage: newfilename [filePath] - Get an unused filename by appending a number if it exists: file.txt → file (1).txt"
    },
    linguist: {
        func: async (args) => {
             const linguist = (await import("https://esm.sh/linguist-js")).default
          
               const path = args[0] || '';
            const contents = fs.ls(path);

          
          
          function buildTree(node) {
        let result = {};
        if (node.type === 'file') {
            return node.contents;
        }
        for (let child of node?.children  || node) {
            result[child.key] = buildTree(child);
        }
        return result;
    }

          const obj = buildTree(contents)
          
          const { keys, values } = Object.entries(obj)
    .filter(([key, value]) => !Array.isArray(value) && typeof value !== 'object')
    .reduce((acc, [key, value]) => {
        acc.keys.push(key);
        acc.values.push(value);
        return acc;
    }, { keys: [], values: [] });

 ; 
          
          
          
          
          const fileNames = keys
const fileContent =  values
const options = { ignoredFiles: ['ignore*'] };
const results = await linguist(fileNames, { fileContent, ...options });

return results////
          
          
        },
        help: "Usage: linguist [path] - Analyses the languages of all files in a given folder and collates the results."
    },
     eslint:{
    func: async (args) => {
        // Import the linter dynamically
        const { Linter } = (await import('https://esm.sh/eslint-linter-browserify')).default;
        
        // Initialize the linter
        const linter = new Linter();

        // Extract the filename from arguments
        const fileName = args.find(arg => arg.startsWith('-f'))?.split('=')[1]

        
        // Read the file content using fs
        const code = fs.cat("", fileName, null);
        //console.log(code)
        // Parse rules from arguments (assuming a simple format for rules)
        const rules = args
            .filter(arg => arg.startsWith('-r'))
            .reduce((acc, rule) => {
                const [ruleName, ruleSetting] = rule.split('=')[1].split(':');
                acc[ruleName] = [ruleSetting || 'warn'];
                return acc;
            }, {});

        // Lint the code
        const messages = linter.verify(code, { rules }, { filename: fileName });

        // Return linting messages
          // Format output
            if (messages.length === 0) {
                return `No linting errors or warnings in ${fileName}.`;
            }

            return messages.map(msg => 
                `Line ${msg.line}, Column ${msg.column}: ${msg.message} (${msg.ruleId})`
            ).join('\n');
    },
    help: "Usage: eslint [-f filename] [-r rule1:setting] [-r rule2:setting] - Lint the specified file with the provided ESLint rules."
},
     esbuild: {
        func: async (args) => {
          
     const esbuild = (await import("https://esm.sh/esbuild-wasm")); 
          
          
         
          
          if(!fs.exports["ESBUILD_INIT"]){
          
           fs.export("ESBUILD_INIT", "TRUE")
          
          
             await esbuild.initialize({
	worker: true,
	wasmURL: "https://unpkg.com/esbuild-wasm/esbuild.wasm",
});
          }
          
            //   const path = args[0]
            //const filePath = fs.cat(">", path);
            let fileName = args[0]
            if(!fs.fileExists(fileName)){
              throw new Error(`${fileName} does not exist.`)
            }
            
            const contents = fs.ls("/")

          
          
          function buildTree(node) {
        let result = {};
        if (node.type === 'file') {
            return node.contents;
        }
        for (let child of node?.children  || node) {
            result["/" + child.key] = buildTree(child);
        }
        return result;
    }

         let fileTreeObj = buildTree(contents)
           
          
        
          
          
          // Custom resolver plugin
function customResolver(tree) {
    const map = new Map(Object.entries(tree));

    return {
        name: 'example',
        setup(build) {
            build.onResolve({ filter: /.*/ }, (args) => {
                if (args.kind === 'entry-point') {
                    return { path: '/' + args.path };
                }

                if (args.kind === 'import-statement') {
                  // const path = path
                    const dirname = path.dirname(args.importer); 
                    const Path = path.join(dirname, args.path);
                    return { path:Path };
                }

                throw new Error('not resolvable');
            });

            build.onLoad({ filter: /.*/ }, (args) => {
                if (!map.has(args.path)) {
                 //   throw new Error('not loadable');
                }
                const ext = path.extname(args.path);
                const contents = map.get(args.path);

                const loader = (ext === '.ts')  ? 'ts'  : 
                               (ext === '.tsx') ? 'tsx' :
                               (ext === '.js')  ? 'js'  :
                               (ext === '.jsx') ? 'jsx' :
                               'default';

                return { contents, loader };
            });
        }
    };
}

// Example usage
async function run() {
   

    const tree =  fileTreeObj;

    try {
        const result = await esbuild.build({
            entryPoints: [fileName],
            plugins: [customResolver(tree)],
            bundle: true,
            write: false,
        });

        const decoder = new TextDecoder();
        fileName = fileName.replace(".js", '.min.js');
       fs.cat(">", fileName, decoder.decode(result.outputFiles[0].contents));
      
      term.output(`File built to ${fileName}`)
      
    } catch (error) {
        term.output(`Build failed: ${error}`);
    }
}
 
run();//
          ////
          
        },
        help: "Usage: esbuild [file] - Builds a JavaScript file using esbuild."
    },
     epoch: {
    func: async (args) => {
        const epoch = (date) => {
            return Math.floor(date.getTime() / 1000);
        };

        try {
            if (args.length === 0) {
                // No arguments provided, return current epoch timestamp
                return epoch(new Date());
            } else if (args.length === 1) {
                // Parse the provided date string
                let inputDate = new Date(args[0]);
                if (isNaN(inputDate.getTime())) {
                    throw new Error("Invalid date format. Please use a valid date string.");
                }
                return epoch(inputDate);
            } else {
                throw new Error("Too many arguments provided. Use [-date] to specify a date.");
            }
        } catch (error) {
            return `Error: ${error.message}`;
        }
    },
    help: "Usage: epoch [-date] - Returns an epoch timestamp.\n" +
          "  - If no date is provided, returns the current epoch timestamp.\n" +
          "  - If a date is provided, returns the epoch timestamp for that date.\n" +
          "Example:\n" +
          "  epoch\n" +
          "  epoch \"2024-09-13T14:35:22Z\"\n" +
          "Note: Dates should be in a format recognized by the JavaScript Date object."
},
     strftime: {
        func: async (args) => {
          const strftime = (await import('https://esm.sh/strftime')).default
          
          // args is array like = []
          
           /* 
            // Parse arguments for flags like this (just example)
            
            for (let i = 0; i < args.length; i++) {
                if (args[i] === '-e' && args[i + 1]) {
                    options.eyes = args[++i];
                } else if (args[i] === '-T' && args[i + 1]) {
                    options.tongue = args[++i];
                } else if (args[i] === '-f' && args[i + 1]) {
                    options.cow = args[++i]?.toUpperCase();
                } else {
                    options.text += decode(args[i].trim()) + ' ';
                }
            }
            */
             //     console.log(strftime('%B %d, %Y %H:%M:%S')) // => April 28, 2011 18:21:08
   // console.log() // => 2011-06-07 18:51:45
          const options = {date:null}
          
             function epochToJsDate(ts){
        // ts = epoch timestamp
        // returns date obj
        return new Date(ts*1000);
   }
            for (let i = 0; i < args.length; i++) {
                if (args[i] === '-d' && args[i + 1]) {
                    if(!args[i+1].includes('-')){
                      args[i+1] = epochToJsDate(args[i+1])
                    }
                    options.date = new Date(args[i+ 1]);
                }  else{
                  options.format = args[0] 
                }
            }
 
          return strftime(options.format.trim(), options?.date|| null)
          
        },
        help: "Usage: strftime [format] [-date] - Format dates and times.\n -d Format a given time object." +
       "  strftime \"%B %d, %Y %H:%M:%S\" -d \"2024-09-13T14:35:22Z\"\n" +
          "Note: Dates should be in a format recognized by the JavaScript Date object." 
    },
         strptime: {
        func: async (args) => {
          const strptime = (await import('https://esm.sh/gh/Katochimoto/strptime')).default
          
           const date = args[0]
           
           const format = args[1]
            
         // console.log(options)
         return JSON.stringify(strptime(date, format)).slice(1, -1); 
          
        },
        help: "Usage: strptime [date] [format] - Convert a string representation of time to a time tm structure." +
       "  strptime \"2024-09-16 14:30:00\" \"%Y-%m-%d %H:%M:%S\"\n" +
          "Note: Dates should be in a format recognized by the JavaScript Date object." 
    },    
      abbrev: {
        func: async (args) => {
           const abbrev = (await import("https://esm.sh/abbrev")).default;
    if (typeof args === 'string') {
        args = [args]; // Convert string to an array
    }
return abbrev(...args);
          
        },
        help: "Usage: abbrev [...strings] - Calculates the set of unambiguous abbreviations for a given set of strings."
    }, 
   worldmap: {
        func: async (args) => {
 
    const JSON5 = (await import("https://esm.sh/json5")).default;
    const asciiWorldmap = (await import("https://esm.sh/ascii-worldmap")).default;

    let markers = [];
    let config = { border: true, margin: 2, padding: 2 };

    for (let i = 0; i < args.length; i++) {
      if (args[i] === '-markers' && args[i + 1]) {
        markers = JSON5.parse(args[++i]);
      } else if (args[i] === '-border') {
        config.border = args[i + 1] !== "false";
      } else if (args[i] === '-margin' && args[i + 1]) {
        config.margin = parseInt(args[++i]);
      } else if (args[i] === '-padding' && args[i + 1]) {
        config.padding = parseInt(args[++i]);
      }
    }

  
    
    return asciiWorldmap.drawMap(markers, config);
  },
        help: "Usage: worldmap [options]\n" +
        "Options:\n" +
        "  -markers [array]  Specify markers in array data.\n" +
        "  -border [true|false]  Show or hide borders. Defaults to true.\n" +
        "  -margin value  Set margin value.\n" +
        "  -padding value  Set padding value."
    }, 
  tee: {
        func: async (args) => {
             if(args[0] === "/dev/tty"){
               args.shift() 
               term.output(args.join(" "))
             }
          
        },
        help: "Usage: tee [stdout] [message] - Outputs a message to stdout or file."
    }, 
  id: {
    func: (args) => {
        const proc = require('process');
        let idType = 'pid';

        if (args.length > 0) {
            if (args[0] === '-p') {
                idType = 'pid';
            } else if (args[0] === '-g') {
                idType = 'gid';
            } else if (args[0] === '-u') {
                idType = 'uid';
            } else {
                console.error('Invalid option');
                return;
            }
            args.shift();
        }

        if (args.length > 0) {
            const userId = parseInt(args[0]);
            if (idType === 'uid') {
                try {
                    const user = proc.getuid().toString() === userId.toString()? proc.release.name : require('child_process').execSync(`id -un ${userId}`).toString().trim();
                    return `uid=${userId}(${user})`;
                } catch (e) {
                    return `uid ${userId} does not exist`;
                }
            } else if (idType === 'gid') {
                try {
                    const group = proc.getgid().toString() === userId.toString()? proc.release.name : require('child_process').execSync(`id -gn ${userId}`).toString().trim();
                    return `gid=${userId}(${group})`;
                } catch (e) {
                    return `gid ${userId} does not exist`;
                }
            }
        } else {
            if (idType === 'pid') {
                return `pid=${proc.pid}`;
            } else if (idType === 'uid') {
                return `uid=${proc.getuid()}(${proc.release.name})`;
            } else if (idType === 'gid') {
                return `gid=${proc.getgid()}(${proc.release.name})`;
            }
        }
    },
    help: 'Usage: id [-p | -u | -g] [id] - Displays the user ID, group ID, or process ID.'
},
     echoByID: {
        func: async (args) => {
             return await commands.cowsay.func(args, true)
          
        },
        help: "Usage: cowthink [message] [-e eyes] [-T tongue] [-f cowfile] - Generates a cowthink ASCII art with the specified message and options."
    }, 
    patch: {
        func: async (args) => {
          const patch = fs.cat("", "mydiff.patch") 
          Diff.applyPatches(patch, {
    loadFile: (patch, callback) => {
        let fileContents;
        try {
            fileContents = fs.cat("", patch.oldFileName).toString();
        } catch (e) {
            callback(`No such file: ${patch.oldFileName}`);
            return;
        }
        callback(undefined, fileContents);
    },
    patched: (patch, patchedContent, callback) => {
        if (patchedContent === false) {
            callback(`Failed to apply patch to ${patch.oldFileName}`)
            return;
        }
        fs.cat("", patch.oldFileName, patchedContent);
        callback();
    },
    complete: (err) => {
        if (err) {
            console.log("Failed with error:", err);
        }
    }
});
             /*
             const fs = require('fs');
const diff = require('diff');

// Read the original file and the diff file
const original = fs.readFileSync('oldfile.txt', 'utf8');
const patch = fs.readFileSync('example.patch', 'utf8');

// Parse the patch
const diffLines = patch.split('\n').filter(line => line.startsWith('+') || line.startsWith('-'));

// Apply the patch
let modified = original.split('\n');
diffLines.forEach(line => {
    if (line.startsWith('+')) {
        // Insert new line
        modified.push(line.substring(1));
    } else if (line.startsWith('-')) {
        // Remove line
        const index = modified.indexOf(line.substring(1));
        if (index !== -1) {
            modified.splice(index, 1);
        }
    }
});

// Write the modified file
fs.writeFileSync('newfile.txt', modified.join('\n'), 'utf8');
console.log('Patch applied successfully!');
*/
        },
        help: "Usage: cowthink [message] [-e eyes] [-T tongue] [-f cowfile] - Generates a cowthink ASCII art with the specified message and options."
    }, 
  
    foreach:{
    func: async (args) => {
        // Check if the command format is correct
        if (args.length < 3 || !args.includes('in') || !args.includes('do')) {
            return 'Usage: foreach <variable> in <list> do <command> - Iterates over a list and executes a command for each item.';
        }
 
        // Extract the variable, list, and command parts from the arguments
        const varIndex = 0;
        const inIndex = args.indexOf('in') + 1;
        const doIndex = args.indexOf('do') + 1;

        // Ensure 'in' and 'do' are properly positioned
        if (inIndex <= varIndex || doIndex <= inIndex) {
            return 'Error: Invalid command structure.';
        }

        const variable = args[varIndex];
        const list = args.slice(inIndex, doIndex - 1).join(' ').split(',').map(item => item.trim());
        const command = args.slice(doIndex).join(' ');

        // Execute the command for each item in the list
      
      let results = ""
        for (const item of list) {
            try {
              
 
                const result = await processCommand(command.replace(variable, item));
              if(result){
                results += "\n" + result
              }
              
            } catch (error) {
                return `Error executing command for item '${item}': ${error.message}`;
            }
        }

        return results.trim() || 'Iteration complete.';
    },
    help: 'Usage: foreach <variable> in <list> do <command> - Executes the command for each item in the list, replacing the variable with the current item.'
},
  
     repeat: {
    func: async (args) => {
        if (args.length < 2 ||  isNaN(args[0])) {
            return 'Usage: repeat <number> <command> - Executes the command a specified number of times.';
        }

        let times = parseInt(args[0], 10);
        args.shift()
        let command = args.join(' ');

        for (let i = 0; i < times; i++) {
            try {
              const result =  await processCommand(command);
              if(result){
                term.output(result)
              }
            } catch (error) {
                return `Error executing command: ${error.message}`;
            }
        }

        return `Command executed ${times} times.`;
    },
    help: 'Usage: repeat <number> <command> - Executes the command the specified number of times.'
}, 
  xargs: {
    func: async (args, options) => {
        const command = args[0];
        const inputs = args.slice(1).join(" ");
        if (!command) return "Usage: xargs <command> [args...] - Executes the specified command with the provided inputs.";

        // Simulating command execution
        term.output(`Executing: ${command} with inputs: ${inputs}`);
        const xargs = []
        xargs.push(command)
        xargs.push(inputs)
        return await processCommand(xargs.join(" "), options)
    },
    help: "Usage: xargs <command> [args...] - Executes the specified command with inputs from standard input."
},
  lodash: {
    func: (args) => {
        const _ = require('lodash');
        const command = args[0];
        const input = JSON.parse(args[1]);
        switch (command) {
            case 'clone':
                return JSON.stringify(_.clone(input));
            case 'uniq':
                return JSON.stringify(_.uniq(input));
            default:
                return "Unknown lodash command.";
        }
    },
    help: "Usage: lodash <command> <jsonInput> - Performs lodash operations like 'clone' or 'uniq'."
},
  sort: {
    func: (args) => {
  
        const filename = args[0];
        if (!filename) return "Usage: sort <filename>";
        
        const lines = fs.cat("", filename).split("\n").sort();
        return lines.join("\n");
    },
    help: "Usage: sort <filename> - Sorts the lines of the specified file."
},
  switcht:{
    func: async (args) => {
      
      // switcht "2 + 3" case 5:" echo 'Five selected!'" case 10: "echo 'Ten selected!'" default echo 'No match found.'
       // switcht "7 + 3" case 5:" echo 'Five selected!'" case 10: "echo 'Ten selected!'" default echo 'No match found.'
        const commands = {};
        let currentCommand = 'switch';
        let currentCase = 'case';
        let defaultCommand = '';

        for (let i = 0; i < args.length; i++) {
            if (args[i] === 'switch') {
                currentCommand = 'switch';
            } else if (args[i] === 'case') {
                currentCommand = 'case';
            } else if (args[i] === 'default') {
                currentCommand = 'default';
            } else if (args[i] === ':') {
                continue; // Skip colons
            } else {
                if (currentCommand === 'switch') {
                    commands[currentCommand] = args[i];
                    currentCommand = 'case';
                } else if (currentCommand === 'case') {
                    if (!commands[currentCommand]) {
                        commands[currentCommand] = [];
                    }
                    commands[currentCommand].push(args[i]);
                } else if (currentCommand === 'default') {
                    defaultCommand += args[i] + ' ';
                }
            }
        }

        let switchExpr = commands.switch;
        let caseCmds = commands.case || [];
        let defaultCmd = defaultCommand.trim();

        // Assume `processCommand` evaluates the expression and returns a result
        let switchValue = await processCommand(`expr ${switchExpr}`);

    
      
        for (let caseCmd of caseCmds) {
            let [caseValue, ...commands] = caseCmd.split(':');
   
          if (!isNaN(switchValue)) {
     switchValue= Number(switchValue);
} 
          if (!isNaN(caseValue)) {
    caseValue= Number(caseValue);
} 
          
          console.log(switchValue, caseValue, commands)
          
            if (switchValue === caseValue) {
                return await processCommand(commands.join(' '));
            }
        }

        if (defaultCmd) {
            return await processCommand(defaultCmd);
        }

        return 'No matching case and no default provided.';
    },
    help: 'Usage: switcht switch <value> case <case1>: <command> [case <case2>: <command>] [default <command>] - Executes a command based on a case value.'
},
  
      loop: {
    func: async (args) => {
       return true;
        const commands = {};
        let currentCommand = 'while';
        let conditionCmd = '';
        let loopCmd = '';

        for (let i = 0; i < args.length; i++) {
            if (args[i] === 'while') {
                currentCommand = 'while';
            } else if (args[i] === 'do') {
                currentCommand = 'do';
            } else {
                if (currentCommand === 'while') {
                    conditionCmd += args[i] + ' ';
                } else if (currentCommand === 'do') {
                    loopCmd += args[i] + ' ';
                }
            }
        }

        conditionCmd = conditionCmd.trim();
        loopCmd = loopCmd.trim();

        while (true) {
            let condition = await processCommand(`expr ${conditionCmd}`);

            if (condition === 'false') {
                break;
            }

            try {
                await processCommand(loopCmd);
            } catch (error) {
                return `Error executing loop command: ${error.message}`;
            }
        }

        return 'Loop terminated.';
    },
    help: 'Usage: loop while <condition> do <command> - Executes the command repeatedly until the condition evaluates to false.'
}, 
  trycatch: {
    func: async (args) => {
        const commands = {};
        let currentCommand = 'try';
        let tryCmd = '';
        let catchCmd = '';

        for (let i = 0; i < args.length; i++) {
            if (args[i] === 'try') {
                currentCommand = 'try';
            } else if (args[i] === 'catch') {
                currentCommand = 'catch';
            } else {
                if (currentCommand === 'try') {
                    tryCmd += args[i] + ' ';
                } else if (currentCommand === 'catch') {
                    catchCmd += args[i] + ' ';
                }
            }
        }

        tryCmd = tryCmd.trim();
        catchCmd = catchCmd.trim();
 
      
        try {
            return await processCommand(tryCmd);
        } catch (error) {
            try {
                return await processCommand(catchCmd);
            } catch (catchError) {
                return `Error in catch block: ${catchError.message}`;
            }
        }
    },
    help: 'Usage: trycatch try <command> catch <command> - Executes the try command and if it fails, executes the catch command.'
 
},
   tictactoe:{
    func: async (args) => {
        // Initialize the board
       const Board = (await import ('https://esm.sh/tictactoe-board')).default
 
        const Table = (await import("https://esm.sh/cli-table")).default
       
        let board = new Board();

         
       let singlePlayer = true
       
       if(args[0] === "-2player"){
         singlePlayer = false
       }
      
      
        // Helper function to print the board
        const printBoard = () => {
         //   const rows = board.rows(board).map(subArray => subArray.map(item => item === "" ? " " : item)); // ensure formatting looks nice.
          
          let itemNumber =0
 
          //let itemNumber = 0;
const rows = board.rows(board).map((subArray, rowIndex) => subArray.map((item, colIndex) => {
  itemNumber++;
  return item === "" ? itemNumber : item;
}));
 
           term.output(new Table({rows}).toString())
        };

        // Helper function to get and validate player move
        const getPlayerMove = async () => {
            let input = "Enter your move (1-9):"
            
            if(!singlePlayer){
            input =  await term.input(`Player ${board.currentMark() === "O" ? '2' : '1'} (${board.currentMark()}), enter your move (1-9):`)
            }else{
             input = await term.input(input)
            }
            
            if(input.trim() === "exit"){
              return input
            }
            const move = parseInt(input.trim(), 10) 
            
            if (board.isMoveValid(move)) {
                return move;
            } else {
                term.output('Invalid move, please try again.\n');
                return getPlayerMove();  // Recursively prompt for a valid move
            }
        };

        // Function to handle a single turn
        const handleTurn = async () => {
            printBoard();
            const move = await getPlayerMove();
           
           if(move === "exit"){
             return "Tic Tac Toe Game Exited"
           }
          
           board = board.makeMove(move, board.currentMark());

 
             printBoard();
            if (board.hasWinner()) {
               
                term.output(`Player ${board.winningPlayer() === "O" ? '1' : '1'} (${board.winningPlayer()}) wins!\n`);
            } else if (board.isGameDraw()) {
                
                term.output('The game is a draw!\n');
            } else {
                // Switch to the next player's turn
               if(singlePlayer){
                  // AI's turn
                term.output('AI is making a move...\n');
                await commands.sleep.func('1s')
                const move = getBestMove();
                board = board.makeMove(move, board.currentMark());
                 
                 if (board.hasWinner()) {
                  printBoard();
                term.output(`You ${board.winningPlayer() === "O" ? 'lost' : 'win'}!`);
                   return 
                 }
                 
                 await handleTurn();
                
               }
              
               if(!singlePlayer){
                  await handleTurn();
               }
              
            }
        };

      
      // AI LOGIC
      
              // Min-Max algorithm for AI move calculation
          const cache = new Map();

    const generateBoardKey = (board) => {
        // Create a unique string representation of the board state
        return board.grid.flat().join(',');
    };
        const minMax = (currentBoard, depth, isMaximizing) => {
          
                   const boardKey = generateBoardKey(currentBoard);

        // Check cache for previously computed score
        if (cache.has(boardKey)) {
            return cache.get(boardKey);
        }
          
            const availableMoves = currentBoard.availablePositions();

            if (currentBoard.hasWinner()) {
                return isMaximizing ? -10 : 10;
            }
            if (currentBoard.isGameDraw()) {
                return 0;
            }

            let bestScore = isMaximizing ? -Infinity : Infinity;

            for (const move of availableMoves) {
                let newBoard = currentBoard
                let moveMarker = isMaximizing ? 'O' : 'X'
                newBoard = newBoard.makeMove(move, moveMarker);
                
            
              
                const score = minMax(newBoard, depth + 1, !isMaximizing);
                bestScore = isMaximizing
                    ? Math.max(score, bestScore)
                    : Math.min(score, bestScore);
            }

            cache.set(boardKey, bestScore);
            return bestScore;
        };

        const getBestMove = () => {
            const availableMoves = board.availablePositions();
            let bestMove = null;
            let bestScore = -Infinity;

            for (const move of availableMoves) {
               let newBoard =  board 
       
              // let newBoard = new Board();
                //newBoard.grid = [...board.grid];
                newBoard = newBoard.makeMove(move, 'O');
              
             

                const score = minMax(newBoard, 0, false);
                if (score > bestScore) {
                    bestScore = score;
                    bestMove = move;
                }
            }
        
            return bestMove;
        };
      
        // Start the game
         
        return await handleTurn() || "Game Exited";
    },
    help: "Usage: tictactoe [options] - Play a simple CLI-based Tic Tac Toe game.\n Options: -2player for enabling two player."
   },
   cowsay: {
    func: async (args, think=false) => {
        try {
          
 
          if (typeof think != "boolean") {
          think = false
         }
          
          let cowUsage = commands.cowsay
          
          if(think === true){
            cowUsage = commands.cowthink
          }
          
           if (args.length < 1) {
            return `Error: Not enough arguments. ${cowUsage.help}`;
        }
          
          
          if(args[0] === "-h"){
            return cowUsage.help
          }
          
                  // Dynamically import the cowsay module
            const cowsay = await import("https://esm.sh/cowsay");
            // Default options
            let options = {
                text: ''
            };

          
         
            // Parse arguments for flags
            
            for (let i = 0; i < args.length; i++) {
                if (args[i] === '-e' && args[i + 1]) {
                    options.eyes = args[++i];
                } else if (args[i] === '-T' && args[i + 1]) {
                    options.tongue = args[++i];
                } else if (args[i] === '-f' && args[i + 1]) {
                    options.cow = args[++i]?.toUpperCase();
                } else {
                    options.text += decode(args[i].trim()) + ' ';
                }
            }

            // Trim any extra whitespace from the message
          
          
            //options.text =   decode(message.trim());
 //
     
        
         const wrapLength = stringWidth(options.text, {countAnsiEscapeCodes:true})
          
          options.wrapLength= wrapLength + 5
          
            // Validate cow type
            const validCows = Object.keys(cowsay).filter(key => !['say', 'think'].includes(key));

            
          
            if (options.cow && !validCows.includes(options?.cow)) {
                return `Error: Unknown cow type ${options.cow}.`;
            }
          
            if (options.cow && validCows.includes(options?.cow)) {
                options.cow = cowsay[options.cow]
            }
          
         
       

            // Generate the cowsay output
           if(!think){
            return  cowsay.say(options).replaceAll('&apos;', "'");
           }
          
           
           return  cowsay.think(options).replaceAll('&apos;', "'");
        } catch (error) {
            // Handle any errors that occur during execution
            return `Error: Unable to generate cowsay output. ${error.message}`;
        }
    },
    help: "Usage: cowsay [message] [-e eyes] [-T tongue] [-f cowfile] - Generates a cowsay ASCII art with the specified message and options."
},
    yodasay: {
    func: async (args, think=false) => {
        try {
          //  
 
          if (typeof think != "boolean") {
          think = false
         }
          
          let cowUsage = commands.cowsay
          
          if(think === true){
            cowUsage = commands.cowthink
          }
          
           if (args.length < 1) {
            return `Error: Not enough arguments. ${cowUsage.help}`;
        }
          
          
          if(args[0] === "-h"){
            return cowUsage.help
          }
          
                  // Dynamically import the cowsay module
            const cowsay = await import("https://esm.sh/gh/scotttesler/yodasay/browser.js");//
            // Default options
            let options = {
                text: ''
            };

          
         
            // Parse arguments for flags
            
            for (let i = 0; i < args.length; i++) {
                if (args[i] === '-e' && args[i + 1]) {
                    options.eyes = args[++i];
                } else if (args[i] === '-T' && args[i + 1]) {
                    options.tongue = args[++i];
                } else if (args[i] === '-f' && args[i + 1]) {
                    options.cow = args[++i]?.toUpperCase();
                } else {
                    options.text += decode(args[i].trim()) + ' ';
                }
            }

            // Trim any extra whitespace from the message
          
          
            //options.text =   decode(message.trim());
 //
     
        
          options.wrapLength= 400
          
            // Validate cow type
            const validCows = Object.keys(cowsay).filter(key => !['say', 'think'].includes(key));

            
          
            if (options.cow && !validCows.includes(options?.cow)) {
                return `Error: Unknown cow type ${options.cow}.`;
            }
          
            if (options.cow && validCows.includes(options?.cow)) {
                options.cow = cowsay[options.cow]
            }
          
         
       

            // Generate the cowsay output
           if(!think){
            return  cowsay.say(options).replaceAll('&apos;', "'");
           }
          
           
           return  cowsay.think(options).replaceAll('&apos;', "'");
        } catch (error) {
            // Handle any errors that occur during execution
            return `Error: Unable to generate cowsay output. ${error.message}`;
        }
    },
    help: "Usage: yodasay [message] [-e eyes] [-T tongue] [-f cowfile] - Generates a yodasay ASCII art with the specified message and options."
},
  cal:   {
    func: (args) => {
        // Month names and weekday headers
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const weekdayHeader = " Su Mo Tu We Th Fr Sa";

        // Helper function to determine if a year is a leap year
        const isLeapYear = (year) => {
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        };

        // Helper function to get the number of days in a month
        const getDaysInMonth = (month, year) => {
            return new Date(year, month + 1, 0).getDate();
        };

        // Helper function to calculate the day of the week for the first day of a month
        const getFirstDayOfMonth = (month, year) => {
            return new Date(year, month, 1).getDay();
        };

        // Helper function to format and print a calendar month
        const printMonth = (month, year) => {
            let calendar = `      ${months[month]} ${year}   \n`;
            calendar += weekdayHeader + '\n';

            // Calculate the first day and number of days in the month
            const firstDay = getFirstDayOfMonth(month, year);
            const daysInMonth = getDaysInMonth(month, year);

            // Add leading spaces
            calendar += '   '.repeat(firstDay);

            // Add day numbers
            for (let day = 1; day <= daysInMonth; day++) {
                calendar += (day < 10 ? ' ' : '') + day + ' ';
                if ((day + firstDay) % 7 === 0) {
                    calendar += '\n';
                }
            }
            calendar += '\n';

            return calendar;
        };

        // Print a calendar for a single year
        const printYear = (year) => {
            let calendar = `\n\n\n				${year}\n`;
            for (let i = 0; i < 12; i += 3) {
              //  calendar += `  ${months[i]}   ${months[i + 1]}   ${months[i + 2]}\n`;
               // calendar += `${weekdayHeader} ${weekdayHeader} ${weekdayHeader}\n`;

                // Combine the three months into a single string for printing
                let monthLines = ['	 ', '	 ', '	 ', '	 ', '	 ', '	 '];
                for (let j = 0; j < 3; j++) {
                    let month = i + j;
                    let monthCalendar = printMonth(month, year).split('\n'); 
                    for (let k = 0; k < monthLines.length; k++) {
                        if (monthCalendar[k]) {
                            monthLines[k] += monthCalendar[k] + '  ';
                        }
                    }
                }
                monthLines.forEach(line => calendar += line + '\n');
            }
            calendar += '\n\n\n';
            return calendar;
        };

       

        const year = parseInt(args[args.length - 1], 10);
        if (isNaN(year) || year < 1 || year > 9999) {
            return "Invalid year. Please enter a valid number between 1 and 9999.";
        }

       // Main logic
        if (args.length === 1) {
            return printYear(year);
        }
      
        if (args.length < 2) {
            return "Usage: cal [month] year\n";
        }
      
        if (args.length === 2) {
            const month = parseInt(args[0], 10) - 1;
            if (isNaN(month) || month < 0 || month > 11) {
                return "Invalid month. Please enter a number between 1 and 12.";
            }
            return printMonth(month, year);
        } else {
            return "Usage: cal [month] year\n";
        }
    },
    help: "Usage: cal [month] year - Displays a calendar for the specified month or year."
},
  calc: {
    func: async (args) => {
        try {
            const math = await import('https://esm.sh/mathjs');
            let equation = args.join(' ');
            let result = math.evaluate(equation);
            return result.toString();
        } catch (error) {
            return `Error: Unable to evaluate equation. ${error.message}`;
        }
    },
    help: 'Usage: calc <math_expression> - Evaluates a mathematical expression and returns the result.'
},
     exit: {
        func: async () => {     
            exitted = true;
           // fs.dispose() // dispose memory etc.
           //term.output("Exitted shell.");
        },
        help: "Usage: exit - Exits the shell."
    },
   encrypt: {
        func: async (args) => {     
          const file = args[0]  
          const key = args[1]
          fs.encryptFile(args[0], args[1]);
        },
        help: "Usage: exit - Exits the shell."
    },
   decrypt: {
        func: async (args) => {     
          const file = args[0]  
          const key = args[1]
          fs.decryptFile(args[0], args[1]);
        },
        help: "Usage: exit - Exits the shell."
    },
  history: {
    func: (args) => {
    return fs.history(args[0]||10).map(({command, timestamp}) => `${command} - ${new Date(timestamp).toLocaleString()}`).join('\n');
    },
    help: "Usage: help [command] - Displays help for a command, or lists all commands if none is specified."
},
 nano: {
    func:  async (args, options = {}) => {
      const { signal } = options;
      let editor;
      
       const termBody = document.querySelector("#terminal-body").classList 
      
      
       
        const saveFile = (filePath, content, update) => {
                return new Promise(async (resolve, reject) => {
                  
                    try {
                        const fileExists = fs.fileExists(filePath);
                       
                        if (fileExists) {
                            if (update) {
                                await fs.cat('>', filePath, content);
                                term.output(`File updated: ${filePath}\n`);
                            }
                        } else {
                            await fs.touch(filePath);
                            await fs.cat('>', filePath, content);
                            term.output(`File created: ${filePath}\n`);
                        }
                        resolve();
                    } catch (err) {
                      reject(err)
                    }
                });
            };

let isSaving = false;
      async function saveOptions(){
          try {
            isSaving = true
                        const fileName = await term.input('Enter filename: ');
                        if (!fileName?.trim()) {
                            throw new Error ('No filename provided.\n')
                            
                        }
            
             const content = editor?.getValue() || "";
            
                        const saveOption = await term.input('Save as (n)ew or (u)pdate? [n/u]: ');
                        if (saveOption?.trim()?.toLowerCase() === 'u') {
                            await saveFile(fileName, content, true);
                        } else if (saveOption?.trim()?.toLowerCase() === 'n') {
                            await saveFile(fileName, content, false);
                        } else {
                            throw new Error('Invalid option. Please enter "n" for new file or "u" for update.\n');
                        
                        }
                         
                    } catch (error) {
                        term.output(error.message);
                         await saveOptions()
                    }
      }
      
      async function setupEditor(content =null, filePath = ""){
        return new Promise((resolve, reject) => {
            editor = ace.edit('editor');

         ace.config.set('basePath', 'https://cdnjs.cloudflare.com/ajax/libs/ace/1.9.6/')
          var modelist = ace.require("ace/ext/modelist")
let mode = "ace/mode/text"

if(filePath){
mode = modelist.getModeForPath(filePath).mode  
}

const themeList = ace.require("ace/ext/themelist").themes

// Extract and log theme names
const themeNames = themeList.map(theme => theme.name);

let theme = fs.exports['THEME']
          
                
 

  
          
  
if(theme){
   const normalizedName = theme.toLowerCase().replaceAll("-", "_")
    if(themeNames.includes(normalizedName)){
   theme = normalizedName
    }
}          
          
if(theme && !themeNames.includes(theme.toLowerCase()) || !theme){
  theme = 'monokai'
}          

editor.setTheme(`ace/theme/${theme}`);
//console.log(theme)
        
         
          
           editor.session.setMode(mode)


            editor.setValue(content || "")
            document.querySelector('.termino-input').classList.toggle('hidden');
           
  termBody.toggle('hidden')
        
          
          const editorDiv = document.querySelector('#editor')
          
          
  editorDiv.classList.toggle('hidden')         
   editorDiv.classList.toggle('active');

             // Function to remove theme-specific classes
        function removeThemeClasses() {
            var editorContainer = editorDiv
            var themeClasses = Array.from(editorContainer.classList).filter(cls => cls.startsWith('ace_') || cls.startsWith('ace-')); //nano main.js -t github
            themeClasses.forEach(cls => editorContainer.classList.remove(cls));
        }
          
            editor.commands.addCommand({
                name: 'saveFile',
                bindKey: { win: 'Ctrl-S', mac: 'Command-S' },
                exec: async function(editor) {
                   
                    editor.destroy();
                  removeThemeClasses() 
                  document.querySelector('.termino-input').classList.remove('hidden');
                     editorDiv.classList.remove('active');
 editorDiv.classList.add('hidden');                 
                  
             termBody.remove('hidden')
                await saveOptions()
                   editor = null
               
                  resolve();
                  
                },
                readOnly: false
            });

          function abort(){
                if(isSaving){
                  return;
                }
                editor.destroy();
              removeThemeClasses() 
                 
              document.querySelector('.termino-input').classList.remove('hidden');
                   editorDiv.classList.remove('active');
 editorDiv.classList.add('hidden'); 
                  editor = null
                   termBody.remove('hidden')
                    resolve(); // Resolve when exiting the editor
          }
          
          
    
          
          if (signal) {
    signal.addEventListener('abort',abort);
}
          
          
            editor.commands.addCommand({
                name: 'exitEditor',
                bindKey: { win: 'Ctrl-X', mac: 'Command-X' },
                exec: function(editor) {
                  abort()
                },
                readOnly: false
            });
  //
          
          
          
        });
      
      }
      
      
         
      
     //
       async function hello () {
                try {
                 
                  if(args.length === 0){
                      await setupEditor(null, null) 
                  }
                  
                    if (args[0]) {
                        const filePath = args[0];
                        const fileContent = await fs.cat('', filePath, null);
                       args.shift()
                      
                    
                        if (fileContent) {
                           await setupEditor(fileContent, filePath) //editor.setValue(fileContent);
                        }
                    }
                } catch (err) {
 
                 throw err
                }
            }
         await hello()
    },
    help: "Usage: nano [<file>] [-t theme] - Opens the editor for the specified file. Use Ctrl-S to save and Ctrl-X to exit."
},
    download: {
      
        func: (args) => {
            if (args.length < 1) {
                return "Usage: download filename content - Downloads a file with the specified filename and content.";
            }
         function downloadFile(filename, content) {
    let mimeType = 'text/plain'; // Default to plain text

    const extension = filename.split('.').pop().toLowerCase();
    let mimeFound;
            
    if(extension){
      mimeFound = mimetype.lookup(extension)
    }       
    
     if(mimeFound){
       mimeType = mimeFound
     }      

    const blob = new Blob([content], { type: mimeType });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
          
            const filename = args[0];
            let content;
            if(!args[1]){
              content =  fs.cat('', filename, null);
            }else{
              args.shift()
              content = args.join(" ")
            }
            term.echo(`Downloading ${filename}...`)
            downloadFile(filename, content);
           // return 
        },
        help: "Usage: download filename content - Downloads a file with the specified filename and content."
    },
    node: {
    func: async (args, options ={}) => {
        
              // Object to store captured data
        let capturedData = {
            log: '',
            warn: '',
            error: '',
            info: '',
            debug: '',
            trace: ''
        };

        // Store the original console methods
        const originalConsole = {
            log: console.log,
            warn: console.warn,
            error: console.error,
            info: console.info,
            debug: console.debug,
            trace: console.trace
        };

         // Function to convert any value to a string
        function formatValue(value) {
            if (typeof value === 'string') {
                return value;
            } else if (typeof value === 'object') {
                try {
                    return JSON.stringify(value, null, 2); // Pretty print objects
                } catch (e) {
                    return '[Object unable to stringify]';
                }
            } else {
                return String(value);
            }
        }
      //ode fetch.js | cat > github_stats.md
        // Override console methods
        function captureConsoleMethod(method) {
            console[method] = function (args) {
              
              if (Array.isArray(args)) {
              
                capturedData[method] += args.map(item => {
  if (typeof item === 'string') {
    return item
  }
  return  JSON.stringify(item, null, 3); // return non-string items unchanged
}).join(" ")  
              }else{
                
                    capturedData[method] +=  JSON.stringify(args)
                
              }
                
            
                originalConsole[method].apply(console, args);
                 console[method] = originalConsole[method]
            };
        }

const serialize = (await import("https://esm.sh/serialize-javascript")).default
      
const handleOutput = (message) => {
 

  if (Array.isArray(message)) {
    // Format array as string with each item serialized and on a new line
    term.output(message.map(item => serialize(item)).join("\n"));
  } else {
    // Handle non-array messages with serialization
    term.output(serialize(message));
  }
};     
      
/*const handleOutput = (message) => {
  console.log(message)
  if (Array.isArray(message)) {
    // Format array as string with each item on a new line
    
// term.output(message.map(item => JSON.stringify(item)).join("\n")); orginal 
    
    // ANSI color needs better way then replace...
    
   term.output(message.map(item => {
  if (typeof item === 'string') {
    return ansi_up.ansi_to_html(item.replace(/\x1b/g, '\u001b'));
  }
  return  JSON.stringify(item, null, 3); // return non-string items unchanged
}).join("\n").replace(/\\\"/g, '"'));
  } else {
    // Handle non-array messages
    term.output(JSON.stringify(message));
  }
};*/

 

      
    //  script = await fs.cat('', file, null);
      
      
     let file;
     let   processArgs = []
     let processArgv =[]
     let filepath;
    
      if(options?.isFile === true){
        file = args
      }else{
      filepath = args[0]
     // console.log(processArgs)
       file = fs.cat('', args[0], null)
      }
  
     //   filepath = args[0]  

      
      if(filepath){
      
        
        
        processArgs=  args.map(item => item);
        
        processArgv = [options.command, ...processArgs];
        
       // console.log(processArgv)
   

      }
      
//console.log(processArgs)
     // console.log(file)
       let transpiled;
      const qjs_options={
        mocha:false
      }  
      
 


    
      
      if(piping){
          captureConsoleMethod('log');
      transpiled  = await nodeJS(file, console.log, console.log, processArgs, qjs_options);
        
        return capturedData.log
      }
      
      if(!piping){
      transpiled  = await nodeJS(file, handleOutput, handleOutput, processArgs, qjs_options);
      }  
      
          if(transpiled?.ok != true){
           if(options.isFile){ 
             

const dir =  fs.pwd() + "/"
transpiled.error.stack = transpiled?.error?.stack?.replace("/src/index.js", dir + filepath).trim().replaceAll("/src/", dir);
             
            // console.log(transpiled)
                     }
            return transpiled.error
          }
      
      
       
     
       
      
       return transpiled?.data
    },
    help: "Usage: help [command] - Displays help for a command, or lists all commands if none is specified."
},
  coffee:{
    func: async (args, options) => {
        const command = args[0];
        const filePath = args[1];

        // Import CoffeeScript dynamically
        const CoffeeScript = (await import('https://cdn.skypack.dev/coffeescript@2.7.0')).default;

        if (command === '-e' && filePath) {
            // Execute CoffeeScript code directly
            try {
                let code = fs.cat("", filePath) 
                
            
                
                options.isFile = true
                
                
              
                return await commands["node"].func(CoffeeScript.compile(code, { bare: true }), options)
            } catch (error) {
                return `Error executing CoffeeScript code: ${error.message}`;
            }
        } else if (command === '-c' && filePath) {
            // Compile CoffeeScript file to JavaScript
            try {
                const fileContent =   fs.cat('', filePath, null);
                const compiledCode = CoffeeScript.compile(fileContent, { bare: true });
                const outputFilePath = filePath.replace(/\.(coffee|cf|cson)$/, '.js');
               // fs.writeFileSync(outputFilePath, compiledCode);
              
              
              
               try{
                    fs.fileExists(outputFilePath)
                    const existingContent =   fs.cat('>', outputFilePath, compiledCode);
                  }catch(err){
                    fs.touch(outputFilePath)
                   const existingContent =  fs.cat('>', outputFilePath, compiledCode);
                  }
              
                return `Compiled JavaScript written to: ${outputFilePath}`;
            } catch (error) {
                return `Error compiling CoffeeScript file: ${error.message}`;
            }
        } else if (command === '-w' && filePath) {
            // Watch CoffeeScript file for changes
           /* try {
                if (!fs.existsSync(filePath)) {
                    return `File not found: ${filePath}`;
                }

                const compileAndWrite = () => {
                    const fileContent = fs.readFileSync(filePath, 'utf8');
                    const compiledCode = CoffeeScript.compile(fileContent, { bare: true });
                    const outputFilePath = filePath.replace(/\.coffee$/, '.js');
                    fs.writeFileSync(outputFilePath, compiledCode);
                    console.log(`Compiled JavaScript written to: ${outputFilePath}`);
                };

                compileAndWrite(); // Initial compile
                fs.watchFile(filePath, (curr, prev) => {
                    console.log(`File changed: ${filePath}`);
                    compileAndWrite();
                });

                return `Watching file: ${filePath}`;

            } catch (error) {
                return `Error watching CoffeeScript file: ${error.message}`;
            }
            */
          return "Not implemented"
        } else if (!command) {
            return "No command provided. Usage: -e to execute, -c to compile, or -w to watch.";
        } else {
            return `Unknown command: ${command}`;
        }
    },
    help: "Usage: coffee <options> - -e <code> to execute CoffeeScript code, -c <file> to compile CoffeeScript file, or -w <file> to watch CoffeeScript file for changes."
},
upload: {
    func: async (args,  options = {}) => {
            const { signal } = options;
      
    term.output("Press CTRL+X to cancel upload (file upload cancel will NOT work.)")
      await term.delay(2000)
      
      //return "doesn't work atm..."
        function createFileInput() {
            let inputElement = document.createElement('input');
            inputElement.type = 'file';
            inputElement.style.display = 'none';
            inputElement.id = 'hiddenFileInput';
            document.body.appendChild(inputElement);
            return inputElement;
        }

        function cleanup(inputElement) {
            inputElement.removeEventListener('change', handleFileUpload);
            document.body.removeChild(inputElement);
        }

      
       const saveFile = function (filePath, content) {
        const fileExists = fs.fileExists(filePath);
        if (fileExists) {
          
                fs.cat('>', filePath, content);
                term.output(`File updated: ${filePath}\n`);
           
        } else {
            fs.cat('>', filePath, content);
            term.output(`File created: ${filePath}\n`);
        } 
};
        async function handleFileUpload(event) {
          
            const files = event.target.files;
          
         
            if (files.length === 0) {
                // User canceled the file selection
                term.output('File upload canceled.');
                cleanup(inputElement);
                return;
            }

            try {
                for (const file of files) {
                    const content = await new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = (error) => reject(error);
                        reader.readAsText(file);
                    });
                 // console.log(file)
                    saveFile(file.name, content);
                }
            } catch (error) {
                // Handle errors during file reading
                term.output('Error uploading file: ' + error.message);
            } finally {
                cleanup(inputElement);
            }
        }

        const inputElement = createFileInput();
        
        // Create a promise that resolves when the file upload is complete
        const fileUploadPromise = new Promise((resolve) => {
          
          const onAbort = () => {
    // abored = true;
        cleanup(inputElement)     
    term.echo('Operation aborted: AbortError');
   signal.removeEventListener('abort', onAbort);         
    resolve();
};
          
          if (signal) {
    signal.addEventListener('abort', onAbort);
}
   
          
          
        //  console.log(inputElement.value)
            inputElement.addEventListener('change', async (event) => {
               
                await handleFileUpload(event);
                resolve(); // Resolve the promise when file upload is done
            });
          
        });
      
         inputElement.addEventListener('cancel', async (event) => {
               //console.log("hmm")
               
               
        //       await handleFileUpload(event);
                //resolve(); // Resolve the promise when file upload is done
            });

        // Trigger file selection dialog
        inputElement.click();

        // Await the completion of the file upload process
        await fileUploadPromise;
    },
    help: "Usage: upload - Initiates file upload process."
},
read: {
    func: async (args) => {
        // Default prompt message
        let prompt = "";

        // Parse the arguments for flags and the prompt message
      
      //console.log(args)
      
        if (args && args[0] === '-p') {
            prompt = args.slice(1).join(" ");
            args.shift()
        } 
        

        // Await the result from `term.input` with the prompt
        const result = await term.input(prompt);

        let results;
      
        if(args.length != 0){
          results += args.join(" ")
        }
      
        if(results){
          results += " " + result
        }  else{
          results = result;
        } 
        // Return the result
        return result; 
    },
    help: "Usage: read [-p 'prompt'] [input] - Take input from the user with an optional prompt."
},
  help: {
    func: (args) => {
        if (args[0] && commands[args[0]]) {
            return escape(commands[args[0]].help) || "No help found...";
        }
        
        if (!args[0]) {
         // console.log( Object.keys(commands).map(cmd => `${cmd}: ${commands[cmd].help}`).join('\n')) this shows help commands but menu doesnt?
            // List all commands with their help descriptions
            return escape(Object.keys(commands).map(cmd => `${cmd}: ${commands[cmd].help}`).join('\n'));
        }

        return `Command not found: ${args[0]}`;
    },
    help: "Usage: help [command] - Displays help for a command, or lists all commands if none is specified."
},
column: {
  func: async (args) => {
    if (!args[0]) {
      throw new Error("No data was provided.");
    }

    const JSON5 = (await import("https://esm.sh/json5")).default;
    const Table = (await import("https://esm.sh/cli-table")).default;

    let tableData = args[0];
    let colHeaders = [];
    let colWidths = [];

    // Parse table data if it's a JSON string
    if (typeof tableData !== 'object') {
      tableData = JSON5.parse(args[0]);
    }

    // Check if custom headers are provided
    if (args[1] === "-h" && args[2]) {
      colHeaders = JSON5.parse(args[2]);
      if (!Array.isArray(colHeaders)) {
        throw new Error("Headers must be an array.");
      }
    }

    // Check if custom column widths are provided
    if (args[3] === "-w" && args[4]) {
      colWidths = JSON5.parse(args[4]);
      if (!Array.isArray(colWidths) || !colWidths.every(n => typeof n === 'number')) {
        throw new Error("Column widths must be an array of numbers.");
      }
    }

    // Function to validate table data format
    function validateTableData(arr) {
      if (!Array.isArray(arr)) return false;
      return arr.every(item =>
        Array.isArray(item) &&
        item.length === (colHeaders.length || item.length) && // Ensure number of columns matches headers or data
        item.every(field => typeof field === 'string' || typeof field === 'number')
      );
    }

    if (!validateTableData(tableData)) {
      throw new Error("Invalid data format. Table rows must be arrays matching the number of headers or the data.");
    }

    // Create the table with headers and column widths if provided
    const tableOptions = {};
    if (colHeaders.length > 0) {
      tableOptions.head = colHeaders;
    }
    if (colWidths.length > 0) {
      tableOptions.colWidths = colWidths;
    }
    
    const table = new Table(tableOptions);

    // Populate the table with data
    table.push(...tableData);

    return table.toString();
  },
  help: `Usage: column [data] -h [headers] -w [colWidths].
  - data: JSON array of rows to display in the table (required)
  - headers: JSON array of column headers (optional)
  - colWidths: JSON array of column widths (optional)`
},
 boxen: {
    func: async (args) => {
        const text = args.join(' ');
        const boxen = (await import('https://esm.sh/boxen')).default;
        return boxen(text, { padding: 1, borderStyle: 'double' });
    },
    help: "Usage: boxen <text> - Displays text in a box."
},
  jsonata: {
    func: async (args) => {
        const jsonata  = 
(await import('https://esm.sh/jsonata')).default;
        
        const jsonInput = args[0]; // JSON string
        const expression = args[1]; // JSONata expression
        const jsonData = JSON.parse(jsonInput);

        const result = await jsonata(expression).evaluate(jsonData);
        return JSON.stringify(result, null, 2);
    },
    help: "Usage: jsonata <json-string> <jsonata-expression> - Transforms JSON data using JSONata."
},
 htmlExtract: {
    func: async (args) => {
        const htmlInput = args[0]; // HTML string
        const selector = args[1]; // CSS selector

        // Use DOMParser to parse the HTML string
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlInput, 'text/html');
        const elements = doc.querySelectorAll(selector);

        // Extract and return the text content of selected elements
        const result = Array.from(elements).map(el => el.textContent.trim());

        return JSON.stringify(result, null, 2);
    },
    help: "Usage: htmlExtract <html-string> <selector> - Extracts text from HTML using a CSS selector."
},
   figlet: {
    func: async (args) => {
      
        const figlet = (await import("https://esm.sh/figlet")).default
 
 const standard =  (await import("https://esm.sh/figlet/importable-fonts/Standard.js")).default       
                        
figlet.parseFont("Standard", standard); 
                    
let results;                    
     
figlet.text(args.join(" "), {
    font: "Standard",
  }, function(err, data) {
    if (err) {
        throw err
    }
   results = data
});
      
      return results
    },
    help: "Usage: figlet [text] - Converts the specified text into stylized ASCII art using figlet."
},
  
   basename: {
        func: (args) => {
            // Check if at least one argument is provided
            if (args.length < 1) {
                return "Usage: basename <path> [suffix] - Extract the base name from a path, optionally removing a suffix.";
            }

            // Get the path argument
            const filePath = args[0];
            let suffix = args[1] || '';

            // Use path.basename to extract the base name and remove the suffix if provided
            const baseName = path.basename(filePath, suffix);

            // Return the result
            return baseName;
        },
        help: "Usage: basename <path> [suffix] - Extract the base name from a path, optionally removing a suffix."
    },
    logname: {
    func: (args) => {
        return fs.exports['LOGNAME']
    },
    help: "Usage: logname - Return the current user's login name."
},
    dirname: {
    func: (args) => {
        // Check if at least one argument is provided
        if (args.length < 1) {
            return "Usage: dirname <path> - Extract the directory name from a path.";
        }

        // Get the path argument
        const filePath = args[0];

        // Use path.dirname to extract the directory name
        const dirName = path.dirname(filePath);

        // Return the result
        return dirName;
    },
    help: "Usage: dirname <path> - Extract the directory name from a path."
},
  demo:{
    func: async function(){
      let pipingSet = false
      if(piping){ // will change in demo to false.
        pipingSet = true 
      }
      
       function pipeHandler(msg){
       const msgs = [] 

      
       return {msgs, add:function(msg){
        if(!pipingSet){
          return
        }
         
         msgs.push(msg)
       }}  
      }  
        
      let piper = pipeHandler()
      async function sendCommand(msg, returnResults = false){
      
     
      piper.add(msg)  
      term.output(msg)  
      let results = await processCommand(msg)
       
   
      if(returnResults){
        
        
        if(pipingSet){
          
          return piper.msgs.join(" ") 
        } 
        
        return results
        //
      }
      if(results){  
       if(hasAnsi(results)){
      results = ansi_up.ansi_to_html(results)  
       }
      piper.add(msg)   
      term.output(results)
      }
      await term.delay(1000)
      }
      
      await sendCommand(`figlet Demo starting! | chalk bgBlue | chalk red`)
      
      await sendCommand(`hackreveal "Hello welcome to Termino.js Shell" --async`)
      
      term.echo("I can create charts.")
      await sendCommand(`charts '[{"value":100, "name":"A"}, {"value":100, "name":"B"}, {"value":100, "name":"C"}, {"value":100, "name":"D"}]'`)
      
      term.echo("I can use printf.")
      await sendCommand(`printf bar %s`)
      
      term.echo("I can use jsonpath")
      await sendCommand(`jsonpath '[{"name":"London","population":8615246},{"name":"Berlin","population":3517424},{"name":"Madrid","population":3165235},{"name":"Rome","population":2870528}]' '$..name'`)
      
           term.echo("I can use sprintf.")
      await sendCommand(`sprintf '%2$s %3$s a %1$s' 'cracker' 'Polly' 'wants'`)
      
      
             term.echo("I can use vsprintf.")
      await sendCommand(`vsprintf 'The first 4 letters of the english alphabet are: %s, %s, %s and %s' '["a", "b", "c", "d"]'`)
      
      await sendCommand(`curl https://wttr.in/`)
      
      term.echo("I can use strftime")
      
      await sendCommand(`strftime '%B %d, %Y %H:%M:%S' -d '1307487105'`)
      
      await sendCommand(`strftime '%B %d, %Y %H:%M:%S'`)
      
      
      term.echo("I can run lisp")
      
      await sendCommand(`scheme '(console-log "Hello, world!")'`)
      
      await sendCommand(`scheme -f scheme.scm`)
      
      await sendCommand(`skulpt 't = input("hello")\nprint("You said in Python2 " + t)'`)
      
     
      
      term.echo("I can use abbrev to help you find out all the possible and unique abbreviations for one or more strings..")
      await sendCommand(`abbrev "foo" "fool" "folding" "flop"`)
      
      term.echo("I can use glob")
      
      await sendCommand(`glob "foo bar" 'f* b*'`)
      
      term.echo("I can use eslint.")
      await sendCommand(`eslint -f=main.js -r=semi:error -r=no-unused-vars:warn`)
      
        term.echo("I can use figlet.")
      await sendCommand(`figlet 'pretty cool huh'`)
      
      
        term.echo("I can use lolcat.")
      await sendCommand(`figlet 'pretty cool huh' | lolcat`)
      
   term.echo("Execute the a command and logs the output to a file")
      await sendCommand(`log -l output.log "echo hello from logger!"`)
      
      term.echo(`I can use 'git clone' - its not real git or anything close but...`)
      await sendCommand(`git clone https://github.com/MarketingPipeline/Termino.js.git`)
       term.echo(`I can speak text`)
      await sendCommand(`mespeak2 like this`)
      
      term.echo("I can use jsonata")
      
      await sendCommand(`jsonTransform '{"name": "John", "age": 30}' 'name'`)
      
      term.echo(`I can convert yaml, json, csv...`)
      await sendCommand(`convert -f yaml -t json -o output.json 'name: John\nage: 30\ncity: New York'`)
      
      await sendCommand(`convert -f xml -t json -o output.json '<person><name>John</name><age>30</age><city>New York</city></person>'`)
      
      await sendCommand(`convert -f json -t csv -o output.csv '{"name":"John", "age":30, "city":"New York"}'`)
      
      await sendCommand(`csvToJson 'name,age,city\nJohn,30,New York\nAlice,25,Los Angeles'`)
      
      
      await sendCommand(`jsonMerge '{"name": "John"}' '{"age": 30}' '{"city": "New York"}'`)
      
      await sendCommand(`wordCount 'Hello world! Hello everyone!' 'Hello'`)
      
      await sendCommand(`truncate 10 "This is a long string that needs truncation."`)
      
      await sendCommand(`capitalize "hello world"`)
      
      await sendCommand(`hash "Hello, World!"`)
      
      await sendCommand(`hash md5 "Hello, World!"`)

      await sendCommand('uuid')
      
      await sendCommand(`palindrome racecar`)
      await sendCommand(`palindrome racecars`)
      
      await sendCommand(`currency -a 10 -f USD -t CAD`)
      
      term.echo("I can parse it too!")
      
      await sendCommand(`yamlParse 'name: John\nage: 30\ncity: New York'`)
      
      await sendCommand(`jsonDiff '{"name": "John", "age": 30}' '{"name": "John", "age": 31}'`)
      
      await sendCommand(`xmlToJson '<person><name>John</name><age>30</age></person>'`)
      
      await sendCommand(`randomwords`)
      
      await sendCommand(`randomwords 2`)
      
      await sendCommand(`markdownLint '# Hello World\n\nThis is a paragraph.'`)
      
      
      await sendCommand(`htmlToText '<p>This is a paragraph.</p>'`)
      
      term.echo(`I can show you the worldmap!`)
        await sendCommand(`worldmap`)
      
      term.echo(`I can show you certain locations worldmap!`)
      await sendCommand(`worldmap -markers '[{"label":"New York","lon":-74.006,"lat":40.7128,"icon":"\x1b[32m*\x1b[39m"},{"label":"Tokyo","lon":139.6917,"lat":35.6895,"icon":"\x1b[34m*\x1b[39m"}]' -border false -margin 4 -padding 3
`)
      
      
       term.echo("Retries the commands for certain amount times if it fails.")
     // await sendCommand(`retry -r 5 "curl https://example.com"`)
      
      term.echo("Prompt for confirmation before executing a command!")
      await sendCommand(`confirm echo "You confirmed yes!"`)
      
      term.echo("I can make columns")
      
      await sendCommand(`column '[
  ["John", "Doe"],
  ["Jane", "Doe"]
]'`)
      
          await sendCommand(`column '[
  ["John", "Doe"],
  ["Jane", "Doe"]
]' -h '["First Name", "Last Name"]'
`)
      
      await sendCommand(`echo '{"name": "Alice", "age": 25}' | jq -r '.name'`)
      
      await sendCommand(`echo 'Hello World' | awk '{$2="AWK"; print $0}'`)
      
      term.echo("play animations")
      
      await sendCommand(`playanimation 'h' 'he' 'hey' 'hey y' 'hey yo' 'hey you'`)
      
      
  term.echo("Demonstrating the 'playanimation' function:");

  term.echo("\n1. Play animation synchronously with default settings:");
  await sendCommand(`playanimation 'line1' 'line2' 'line3'`);
  term.echo("   This command animates 'line1', 'line2', and 'line3' synchronously, using default settings (100 ms interval and no infinite loop).");

  term.echo("\n2. Play animation asynchronously:");
  await sendCommand(`playanimation --async 'line1' 'line2' 'line3'`);
  term.echo("   This command animates 'line1', 'line2', and 'line3' asynchronously, allowing other tasks to proceed concurrently.");

  term.echo("\n3. Play animation with a custom time interval of 200 milliseconds:");
  await sendCommand(`playanimation -T 200 'line1' 'line2' 'line3'`);
  term.echo("   This command animates 'line1', 'line2', and 'line3' with a 200 milliseconds interval between changes.");

  term.echo("\n4. Play animation with a custom time interval of 300 milliseconds and an infinite loop:");
  await sendCommand(`playanimation -T 300 -i 'line1' 'line2' 'line3'`);
  term.echo("   This command animates 'line1', 'line2', and 'line3' with a 300 milliseconds interval and an infinite loop, making the animation repeat indefinitely.");

  term.echo("\n5. Play animation asynchronously with a custom time interval of 300 milliseconds and an infinite loop:");
  await sendCommand(`playanimation --async -T 300 -i 'line1' 'line2' 'line3'`);
  term.echo("   This command runs the animation asynchronously with a 300 milliseconds interval and an infinite loop.");
      
      
       await sendCommand(`playanimation --async -T 500 '[]' '[=]' '[==]' '[===]' '[====]'`);
      
      
      term.echo("Change the theme")
      
      await sendCommand('setTheme dracula')
      
      await term.delay(1000)
      
        await sendCommand('setTheme solarized')
      
      await term.delay(1000)
      
      
      await sendCommand('setTheme dracula')
      
      await term.delay(1000)
      
      await sendCommand('setTheme ubunutu')
      //
      
      term.echo("Iterates over the list and echoes each item.");

await sendCommand(`foreach item in apple, banana, orange do echo item`);

      
      term.echo("If else than statments")
      
      await sendCommand(`ift if 5 > 3 then echo "Condition is true" else echo "Condition is false"`)
      
      term.echo("Checks if 10 < 20 and prints messages based on the result.");

await sendCommand(`ift if 10 < 20 then echo "10 is less than 20" else echo "10 is not less than 20"`);


 term.echo("Evaluates if a + b == 10 and prints messages based on the result.");

await sendCommand(`ift if a + b == 10 then echo "Sum is 10" else echo "Sum is not 10"`);
     
      
 term.echo("Evaluates if isSunny and prints a message only if false.");

await sendCommand(`ift if 12 else echo "It might rain, take an umbrella"`);
     
      
      term.echo("Attempts to execute 'commandThatMightFail' and prints an error message if it fails.");

await sendCommand('trycatch try commandThatMightFail catch echo "An error occurred: command failed."');

 await sendCommand('trycatch try "echo hello!" catch echo "An error occurred: command failed."');     
      term.echo("Repeats the command 'echo \"Hello\"' 5 times.");

await sendCommand(`repeat 5 echo "Hello"`);

      
      
      await sendCommand(`message=$(chatgpt -r 'hello how are you') | message2=$(echo 'chatgpt said:') | cowsay "$message2 $message"`)
      
      
      await sendCommand(`var=$(calc '1+1') | var2=$(calc '2+2') | echo "Output will equal: $var and $var2"`)
      
      await sendCommand(`expr foo == bar`)

      await sendCommand(`expr foo == foo`)
      
      await sendCommand(`age=$(read -p how old are you) | ift if $age > 18 then echo "You are over 18" else echo "You are not over 18"`)
      
      term.echo("I can pipe commands.")
      await sendCommand(`echo hello | cowsay`)
      
      
      term.echo('I can translate characters')
      term.echo('Translating lowercase vowels to uppercase vowels')
      await sendCommand(`tr 'aeiou', 'AEIOU', 'hello', 'world'`)
      
     
      await sendCommand(`tr  'abc', '123', 'a', 'b', 'c'`)
      
      term.echo("I can pipe commands.")
      await sendCommand(`read  -p "What is your name?" | echo "Your name is:"`)
    
     // await sendCommand(`echo "Would you like to see the calender?" | tee /dev/tty | cal 2025`)
      
       term.echo("I can run javascript.")
      await sendCommand(`node fetch.js`)
      
      
       term.echo("I can render ansi.")
      await sendCommand(`chalk red this | chalk blue like`)
      
      term.echo("I can open a text editor.")
    
      const t = await sendCommand(`read -p "Would you like to open the text editor? Type yes or no!"`, true)
      
      if(t.toLowerCase() === "yes"){
         term.output("Press CTRL + C to quit")
         sendCommand(`nano`, true)
         return
      }
      
      
      term.echo("End of demo! Have fun.")
      
      
    },
    help: "Usage: demo - Provides a demo of somethings 'shell' can do."
  },
  
      pipe: {
        // todo https://unix.stackexchange.com/questions/338000/bash-assign-output-of-pipe-to-a-variable
        
        /*
        "$FILESIZE=$('helllo')  $FILESIZE=$('node js')".replace(/([^)]+)=\$\(([^)]+)\)/g, (match, variable, task) => {
  console.log({var:variable.trim(), task:task.trim()})
})  //
        message=$(echo 'hello')
echo "$message"

*/ 
        func: async (commandList, options={}) => {
            let input;
           
          function replaceKeys(template, data) {
    return template.replace(/\$(\w+)/g, (match, key) => {
        key = key.replace("$", "")
     // console.log(key, data)
        return key in data ? `${data[key]}` : match;
    });
}
          
          let index = 0
         
          let _variables = {}
          
            for (let cmd of commandList) {
               
              let variableSet = false
              
              if(exitted){
                break
              }
              
                const operator = cmd?.operator || null
                const cmdIndex =  index
                cmd = cmd?.command.replaceAll('\\n', '\n')
              
              cmd.replace(/([^)]+)=\$\(([^)]+)\)/g, (match, variable, task) => {
 const taskDetails = {var:variable.trim(), task:task.trim()}
 
 cmd = taskDetails.task
 _variables[taskDetails.var] = null
 variableSet = taskDetails.var
                
           // console.log(taskDetails)   
}) 
              
              if(_variables.length != 0){
               cmd = replaceKeys(cmd, _variables)
              }
              
              //console.log(cmd)
                cmd = cmd.replace("pipe", "").trim()
              
             
              
                const [command, ...args] = split(cmd)
                
            //  console.log(args)
                if (commands[command]) {
                    try {
                      // Check if the current command is the last one or the operator is null
  if (cmdIndex === commandList.length - 1) {
    piping = false;
  }
              
            
                      /*
                         if (commandList.indexOf(cmd) === commandList.length - 1) {
                       piping = false 
                      }
                      */
                       
                     // console.log(command)
                      
                      
                      if(input){
                      args.push(input)
                      }
                   
                        let result; 
                          
                      try{
                        
                        options.command = command
              
                        result =  await commands[command].func(args, options);
                        
                       
                        
                        // quick work around right 
                       if( result &&
    typeof result === "string" &&
    (result.startsWith("Error") || 
     result.startsWith("File not found:") || 
     result.startsWith("Path not"))){
                         throw new Error(result)
                       } else{
                          if(variableSet){
                           
                           _variables[variableSet] = result
                    
                  
                            if (cmdIndex != commandList.length - 1) {
                          result = null;  
                            }
                         }
                       }
                         
                        
                       
                        
                      }catch(err){
                        
                        if( operator === "|"){
                          throw new Error(err)
                        }
                        
                        
                        // if && pipe continue else fail.
                      }
                    
                      //
                     // console.log(result)
                          if(result){ 
                            input = result
                      //input = String(result)
                          }
                        // If it's the last command, return the result
                        if (cmdIndex === commandList.length - 1) {
                            return result;
                        }
                        // Otherwise, pipe the result to the next command
                      
             
                      
                    } catch (err) {
                        throw err;
                    }
                } else {
                  if(operator != "&&"){
                    throw new Error('Invalid Command: ' + command);
                  }
                }
              
               
              index += 1
            }
        }
    }
};


function formatJson(data) {
  
     if (Array.isArray(data)) {
        return JSON.stringify(data)
    }
    // Check if the input is a non-null object
    if (typeof data === 'object' && data !== null) {
        return Object.entries(data)
            .map(([key, value]) => `<b>${key}</b>: ${JSON.stringify(value, null, 3)}`)
            .join('\n');
      
      /*   .map(([key, value]) => `\u001b[1m
${key}\u001b[0m: ${JSON.stringify(value, null, 3)}`)
when ready to format to ansi
*/ 
      
    } else {
        // If not an object, return a string representation of the data
        return data;
    }
}
// Function to process user input
/* old version
async function processCommand(input) {
    const [command, ...args] = input.split(' ');
    if (commands[command]) {
       return formatJson(await commands[command](args));
    } else{
       term.output("Invalid Command.")
    }
}
*/ 
function moveOperators(data) {
  // Create a new array to hold the transformed objects
  const result = [];
  
  // Iterate through each object in the input array
  for (let i = 0; i < data.length; i++) {
    const current = data[i];
    
    // If the current object has an operator
    if (current.operator) {
      // If the operator is "&&" and there's a previous object in the result array
      if (current.operator === "&&" && result.length > 0 && !result[result.length - 1].operator) {
        // Move the operator to the last object in the result array
        result[result.length - 1].operator = "&&";
      } 
      // Otherwise, add the current object to the result array
      else {
        result.push({ ...current });
      }
    } 
    // If the current object does not have an operator, just add it to the result
    else {
      result.push({ ...current });
    }
  }
  
  // Ensure the last item does not have an operator if it exists
  if (result.length > 0 && result[result.length - 1].operator) {
    const lastItem = result.pop(); // Remove the last item
    result.push({ ...lastItem, operator: null }); // Add it back with the operator removed
  }

  return result;
}

function filterEmptyCommands(data) {
  // Filter out objects where the command is empty or ""
  return data.filter(item => item.command && item.command.trim() !== "");
}

function formatStringWithAnsi(message, ...styles) {
    return message.replace(/%c/g, () => {
        const css = styles.shift() || '';
        return cssToAnsi(css);
    }) + '\x1b[0m'; // Reset at the end
}

// Implement processCommand with pipe handling
async function processCommand(input, options = {}) {
 
  
   const abortController = new AbortController();
    const signal = abortController.signal;

    // Add a keydown event listener to detect Ctrl+C
    const handleKeyDown = (event) => {
        if (event.ctrlKey && event.key === 'c') {
        // aborted = true
            abortController.abort();
        }
    };

    window.addEventListener('keydown', handleKeyDown);
  
  
  options.signal = signal
  
  // TODO fix pipe by using this function below and split() - splits into unix commands POSIX... so we can support things like : echo '{"name": "Alice", "age": 25}' | jq '[.data[] | {name: .name, value: .value}]' and get rid of my garbage code.
  function parseCommandArray(arr) {
  const operators = ['|']; // Add more operators if needed
  const result = [];
  let currentCommand = [];

  arr.forEach(item => {
    if (operators.includes(item)) {
      if (currentCommand.length > 0) {
        result.push({
          command: currentCommand.join(' ').trim(),
          operator: item
        });
        currentCommand = [];
      }
    } else {
      currentCommand.push(item);
    }
  });

  // Add the last command if there is no operator after it
  if (currentCommand.length > 0) {
    result.push({
      command: currentCommand.join(' ').trim(),
      operator: null
    });
  }

  return result;
}
  
  
    if(exitted){
      return;
    }
    input = input.replace(/\\x1b/g, '\u001b');
   // const { signal } = options;  //
    
  // Split the input on '&&' first, keeping track of the '&&' operators
const andSegments = input.split('&&').map(segment => segment.trim());
  // Process each AND segment
let commandsList = andSegments.flatMap((segment, index) => {
    // Split each segment on '|' to handle piped commands
    const pipeSegments = segment.split('|').map(cmd => cmd.trim());

    // Create a structure that includes the pipe commands and the '|' operator
    const commands = pipeSegments.map((cmd, i) => {
        return { command: cmd, operator: i < pipeSegments.length - 1 ? '|' : null };
    });

    // Add the '&&' operator if this is not the last AND segment
    if (index < andSegments.length - 1) {
        commands.push({ operator: '&&' });
    }

    return commands;
});
  
    // Split commands based on pipes
   /* const [rawCommand, ...pipeCommands] = input.split('|').map(cmd => cmd.trim());
    const commandsList = [rawCommand, ...pipeCommands];
*/
  
 
  commandsList = filterEmptyCommands(moveOperators(commandsList))
  
    try {
     //
        if (commandsList.length > 1) {
            // If there are pipes, use the pipe command handler     
            piping = true
            const result = await commands.pipe.func( commandsList, options);
            fs._logCommand('pipe');
            return formatJson(result);
        } else {
            // Otherwise, handle the command normally
          
            const [command, ...args] = split(commandsList[0].command.replaceAll('\\n', '\n'));

         
          
          
            if (commands[command]) {
                const pid = fs.createProcess(command);
                const result = await commands[command].func(args, { signal, command });
                fs._logCommand(command);
                fs.terminateProcess(pid);
                return formatJson(result);
            } else {
                throw new TypeError("Invalid Command.")
            }
        }
    } catch (err) {
        piping = false
        if (err.name === 'AbortError') {
            console.log('Command aborted.');
        } else {
            throw err;
        }
    }finally{
      window.removeEventListener('keydown', handleKeyDown);
    }
}

// Simple prompt-based menu
let ipmsg;
let exitted; 

const settings = {
  home:fs.$HOME(),
  hostname:fs.hostname(),
  user:fs.whoami(),
  dir:fs.pwd(), // this updates fine tho?
  //ps1:fs.$PS1() - cant figure out how to get this to dyanmic update...
}
 
function PromptString() {
 
  
    const  formatString = fs.$PS1()
    // Convert the string to an object
   // let promptObject =  settings //
    // Extract values from the settings object
    const hostname = settings?.hostname || 'hostname';
    const user = settings?.user || 'user';
    const dir = settings?.dir || '/';
    const home = settings?.home || '/home';
    const historyNumber = settings?.historyNumber || 0; // Example placeholder
    const date = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit' });
    const time = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    // Convert directory path to a relative path if it's in the home directory
    const currentDir = dir.startsWith(home) ? '~' + dir.substring(home.length) : dir;

    // Replace placeholders with actual values
    return formatString
        .replace(/\\u/g, user)
        .replace(/\\h/g, hostname)
        .replace(/\\w/g, currentDir)
        .replace(/\\t/g, time)
        .replace(/\\d/g, date)
        .replace(/\\!/g, historyNumber)
        .replace(/\\\$/g, (settings?.isRoot ? '#' : '$')); // Use '#' for root user or '$' for others
}

function ensureString(variable) {
    if (typeof variable !== 'string') {
        return String(variable);
    }
    return variable;
}
 const ansi_up = new AnsiUp();
async function menu() {
    let input;
    let result;
  let aborted;

  const pwd = fs.pwd()
  
  if(settings.dir != pwd){
    settings.dir = pwd
  }
  ///
  try{ 
    if(aborted){
      //  exitted = true
      // throw new Error('Aborting process due to Ctrl+C');
    }
    
 
    
   let promptString = PromptString()
    
   if(hasAnsi(promptString)){
      //// 
 
  const parts = promptString.split("/");
  const maxLength = 3; // Number of levels to display

  // If there are more levels than maxLength, use ellipsis to indicate depth
  if (parts.length > maxLength) {
    const visibleParts = parts.slice(-maxLength);
    promptString = parts[0] + `.../${visibleParts.join("/")}`;
  }

  // Convert ANSI to HTML if necessary
  promptString = ansi_up.ansi_to_html(promptString);

  // Add dots based on the number of directory levels
 // promptString += '.'.repeat(parts.length);
 

     
   //  promptString = ansi_up.ansi_to_html(promptString)
   } //
    
    document.querySelector("#terminal-prompt").innerHTML = promptString
    
    // Enter a command (e.g., mkdir /path/to/dir):
 // input = await term.input(`${promptString} `); // termino.js doesn't take signal yet.. :(
    
    input = await term.input(``);
        if (input && input.trim()) {
          
           
          // input = escapeStringRegexp(input)
           
          
          try{
           result =  await processCommand(input);
          if(result){
           
            result =  ensureString(result)
            
           result = result.replaceAll('\\e[', '\x1b[').replaceAll('\e[', '\x1b[').replaceAll('\\033[', '\x1b[');
            
       
         
            
           
            if(hasAnsi(result)){
 
              result = ansi_up.ansi_to_html(result)
            }
          term.output(result)
            
          }
            
          }catch(err){
            term.output(err?.message || err) // handle unix / shell commands went wrong..
          }
        }
     
         
  }catch(err){
    term.output(err.message) // handle MAIN - this function going wrong.
    exitted = true // no exit - and you will loop forever.
  }finally{
    if(!exitted){
    menu()
    }
    
      //
     if(exitted){
     // term.clear() 
       term.output("Termino.js Shell Exited.")
       term.output("type /reboot to reboot system.")
     askForReboot()
    }
      //  window.removeEventListener('keydown', handleKeyDown);
  }
}

async function askForReboot(){
 const input =  await term.input("")
 
 if(input?.trim() === "/reboot"){
   exitted = false
   bootSequence()
 }else{
  askForReboot()
 }
}

const bootSequence = async () => {
    // Introduction message
    term.echo("Booting up...");
    await term.delay(1000); // 1 second delay

    // Simulate loading components
    term.echo("Loading system components...");
    await term.delay(1500); // 1.5 second delay

    term.echo("Initializing network services...");
    await term.delay(1500); // 1.5 second delay

    term.echo("Starting essential services...");
    await term.delay(1500); // 1.5 second delay

    term.echo("Configuring environment...");
    await term.delay(1500); // 1.5 second delay

    term.output(formatJson(fingerprint()))
    const ipmsg = await getIpInfo()
    term.output(formatJson(ipmsg))
    term.echo("Boot sequence complete.");
    await term.delay(2500); // 1 second delay before final prompt

    // Optional: Display the command prompt or additional information
   term.clear()
     term.output(`Termino.js Shell
Version ${fs.$VERSION}
© 2024 MarketingPipeliners.

Type 'help' for a list of commands.
Welcome to Termino.js Shell! Ready for commands. \n`);
   // await term.delay(1000); // Delay to let the message sink in

  makeFile('scheme.scm', `(((lambda (f)
    ((lambda (proc)
       (f (lambda (arg) ((proc proc) arg))))


     (lambda (proc)
       (f (lambda (arg) ((proc proc) arg))))))
  (lambda (self)
    (lambda (ls)
      (if (null? ls) 0 (+ 1 (self (cdr ls)))))))
 '(a b c d e))`)
  
  makeFile('pink_floyd.ascii', "            ..uu.\n           ?$\"\"`?i           z'\n           `M  .@\"          x\"\n           'Z :#\"  .   .    f 8M\n           '&H?`  :$f U8   <  MP   x#'\n           d#`    XM  $5.  $  M' xM\"\n         .!\">     @  'f`$L:M  R.@!`\n        +`  >     R  X  \"NXF  R\"*L\n            k    'f  M   \"$$ :E  5.\n            %    `~  \"    `  'K  'M\n                .uH          'E   `h\n             .x*`             X     `\n          .uf`                *\n        .@8     .\n       'E9F  uf\"          ,     ,\n         9h+\"   $M    eH. 8b. .8    .....\n        .8`     $'   M 'E  `R;'   d?\"\"\"`\"#\n       ` E      @    b  d   9R    ?*     @\n         >      K.zM `%M'   9'    Xf   .f\n        ;       R'          9     M  .=`\n        t                   M     Mx~\n        @                  lR    z\"\n        @                  `   ;\"\n                              `\n                     .u!\"`\n                 .x*\"`\n             ..+\"NP\n          .z\"\"   ?\n        M#`      9     ,     ,\n                 9 M  d! ,8P'\n                 R X.:x' R'  ,\n                 F F' M  R.d'\n                 d P  @  E`  ,\n                P  '  P  N.d'\n               ''        '\n    ss\n     X               x             .\n     9     .f       !         .    $b\n     4;    $k      /         dH    $f\n     'X   ;$$     z  .       MR   :$\n      R   M$$,   :  d9b      M'   tM\n      M:  #'$L  ;' M `8      X    MR\n      `$;t' $F  # X ,oR      t    Q;\n       $$@  R$ H :RP' $b     X    @'\n       9$E  @Bd' $'   ?X     ;    W\n       `M'  `$M d$    `E    ;.o* :R   ..\n        `    '  \"'     '    @'   '$o*\"'  -Philippe Chaintreuil\n") ////
   
  makeFile("fetchPackage.js", `async function loadModule(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    const moduleCode = await response.text();
    const module = eval(moduleCode); // Use eval to execute the module code
    return module;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// Example usage
const module = await loadModule('https://unpkg.com/compromise@14.14.0/builds/compromise.js') 

console.log(module("Hi my name is Jared").people().out('array'))`)
  
  makeFile(`usePackage.js`, `
  import * as fs from "node:fs"

async function loadModule(url) {
  try {
    const response = fs.readFileSync('./src/compromise.js')
    if (!response.ok) {
 
    }
    const moduleCode = response
    const module = eval(moduleCode); // Use eval to execute the module code
    return module;
  } catch (error) {
    console.error(error.message);
  }
}

// Example usage
const module = await loadModule('https://unpkg.com/compromise@14.14.0/builds/compromise.js') 

console.log(module("Hi my name is Jared").people().out('array'))


  `)
  
  makeFile("hello.c", `
  #include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}`)
  
  makeFile(`mocha.js`, `const m = await mocha()

 m.test.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected);
});


const results = await m.run() 


console.log(results)`)
  
  makeFile('golang_cli.go', `package main

import (
	"fmt"
	"log"
	"os"
	"path/filepath"
)

func main() {
	// Check if a directory argument is provided
	if len(os.Args) < 0 {
		fmt.Println("Usage: go run main.go <directory>")
		return
	}

	// Get the directory from command-line arguments
	dir := os.Args[0]

	 
		fmt.Println(dir)
	 
}
`)
  
  makeFile("picture_viewer.html", `<html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}
    
    body{font-family:inter,sans-serif;background:#333;font-size:1.125rem}.container{width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}.container h1{text-transform:uppercase;font-size:4.5rem;text-shadow:4px 4px 1px #000;margin:50px;color:#fff;text-align:center}.container .content{width:700px;background:#222;padding:30px 0;border-radius:7px;box-shadow:0 0 5px 1px rgba(255,255,255,.75)}.container .content ul{display:flex;justify-content:space-evenly;align-items:center}.container .content ul li{display:flex;position:relative;justify-content:center;align-items:center}.container .content ul li a{display:inline-block;position:relative;width:120px;height:120px;border-radius:50%;border:5px solid #555;overflow:hidden}.container .content ul li a img{width:100%;height:100%}.container .content ul li a .thumbs-name{width:100%;height:100%;background:rgba(221,221,221,.3);position:absolute;left:0;top:0;display:flex;justify-content:center;align-items:center;opacity:0;transition:300ms ease;transform:rotate(0) scale(0)}.container .content ul li a .thumbs-name h2{text-decoration:none;text-align:center;color:#000;text-shadow:1px 1px 3px #fff}.container .content ul li a:hover .thumbs-name{opacity:1;transform:rotate(360deg) scale(1)}.container .content ul li .overlay{width:0;height:0;top:0;left:0;right:0;bottom:0;position:fixed;background:transparent;z-index:1;display:flex;justify-content:center;align-items:center;transition:.8s ease}.container .content ul li .overlay:target{background:rgba(0,0,0,.7);width:auto;height:auto}.container .content ul li .overlay .wrapper-content{transform:scale(0);height:100vh;padding:100px 0;position:relative;display:flex;flex-direction:column}.container .content ul li .overlay:target .wrapper-content{transform:scale(1);display:flex;justify-content:center}.container .content ul li .overlay .wrapper-content img{max-height:100%;border:2px solid #fff;border-radius:7px;box-shadow:3px 3px 10px #000}.container .content ul li .overlay:target .wrapper-content img{animation:fadeInOut .8s ease}.container .content ul li .overlay .wrapper-content .next{display:inline-block;position:absolute;width:auto;height:auto;border-radius:0%;border:none;overflow:none;color:#fff;transform:scale(3);right:-20%;opacity:0}.container .content ul li .overlay .wrapper-content .previous{display:inline-block;position:absolute;width:auto;height:auto;border-radius:0%;border:none;overflow:none;color:#fff;transform:scale(3);left:-20%;opacity:0}.container .content ul li .overlay:target .wrapper-content .previous,.container .content ul li .overlay:target .wrapper-content .next{animation:fade .8s ease .3s forwards}.container .content ul li .overlay .wrapper-content p{position:absolute;left:0;bottom:7%;line-height:1.5em;color:#fff;font-size:1rem;font-weight:100;opacity:0;text-shadow:2px 2px 1px #000}.container .content ul li .overlay:target .wrapper-content p{animation:slideUpFade .8s ease .3s forwards}.container .content ul li .overlay .wrapper-content .close{transform:scale(1.5);display:inline-block;position:absolute;width:auto;height:auto;border:none;border-radius:0%;color:#fff;padding:0 10px 10px;right:0;bottom:7%;opacity:0}.container .content ul li .overlay:target .wrapper-content .close{animation:slideUpFade .8s ease .3s forwards}@keyframes fadeInOut{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}@keyframes slideUpFade{0%{opacity:0;bottom:-1%}100%{opacity:1;bottom:7%}}@keyframes fade{0%{opacity:0}100%{opacity:1}}
  </style>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
  <title>CSS-Only Lightbox Gallery Example</title>
</head>



<body>
  <div class="container">
    <h1>CSS-Only Lightbox Gallery Example</h1>
    <div class="content">
      <ul>

        <li>
          <a href="#img1">
            <img src="https://www.jqueryscript.net/dummy/v1.jpg" alt="Image 1">
            <div class="thumbs-name">
              <h2>Image 1</h2>
            </div>
          </a>


          <div id="img1" class="overlay">
            <div class="wrapper-content">

              <a href="#img4" class="previous">
                <i class="fa-solid fa-chevron-left"></i>
              </a>
              <img src="https://www.jqueryscript.net/dummy/v2.jpg" alt="Image 2">
              <a href="#img2" class="next">
                <i class="fa-solid fa-chevron-right"></i>
              </a>

              <p>This is Image 1</p>
              <a href="#" class="close">
                <i class="fa-solid fa-x"></i>
              </a>
            </div>
          </div>
        </li>





        <li>
          <a href="#img2">
            <img src="https://www.jqueryscript.net/dummy/v2.jpg" alt="Image 2">
            <div class="thumbs-name">
              <h2>Image 2</h2>
            </div>
          </a>

          <div id="img2" class="overlay">
            <div class="wrapper-content">

              <a href="#img1" class="previous">
                <i class="fa-solid fa-chevron-left"></i>
              </a>
              <img src="https://www.jqueryscript.net/dummy/v2.jpg" alt="Image 2">
              <a href="#img3" class="next">
                <i class="fa-solid fa-chevron-right"></i>
              </a>

              <p>Image 2</p>
              <a href="#" class="close">
                <i class="fa-solid fa-x"></i>
              </a>
            </div>
          </div>
        </li>





        <li>
          <a href="#img3">
            <img src="https://www.jqueryscript.net/dummy/v3.jpg" alt="Image 3">
            <div class="thumbs-name">
              <h2>Image 3</h2>
            </div>
          </a>

          <div id="img3" class="overlay">
            <div class="wrapper-content">

              <a href="#img2" class="previous">
                <i class="fa-solid fa-chevron-left"></i>
              </a>
              <img src="https://www.jqueryscript.net/dummy/v3.jpg" alt="Image 3">
              <a href="#img4" class="next">
                <i class="fa-solid fa-chevron-right"></i>
              </a>

              <p>Image 3</p>
              <a href="#" class="close">
                <i class="fa-solid fa-x"></i>
              </a>
            </div>
          </div>
        </li>
        




        <li>
          <a href="#img4">
            <img src="https://www.jqueryscript.net/dummy/v4.jpg" alt="Image 4">
            <div class="thumbs-name">
              <h2>Image 4</h2>
            </div>
          </a>

          <div id="img4" class="overlay">
            <div class="wrapper-content">

              <a href="#img3" class="previous">
                <i class="fa-solid fa-chevron-left"></i>
              </a>
              <img src="https://www.jqueryscript.net/dummy/v4.jpg" alt="Thor">
              <a href="#img1" class="next">
                <i class="fa-solid fa-chevron-right"></i>
              </a>

              <p>Image 4</p>
              <a href="#" class="close">
                <i class="fa-solid fa-x"></i>
              </a>
            </div>
          </div>
        </li>
        
      </ul>
      
    </div>

  </div>
  
</body></html>`
); 
  
makeFile("readlineExample.js", `export const readline = {
 
  
  // Use regular function so that 'this' refers to the readline object
  question: async function (questionText, callback) {
    // Write the prompt message
    console.log(questionText);

    // Check if readline is closed before proceeding
    const closed = this.close({ closed: "READLINE_SYM_CALL" });
 
    if (closed) {
      return; // Exit if readline is closed
    }

    // Fetch the input (replace with actual input handling logic)
    const input = await fetch({ url: "QUICK_JS_TOOL", type: "INPUT" });

    // Call the callback with the trimmed input
    callback(input.toString().trim());
  },

  // Closing logic function
  close: function (data = null) {
    // Handle closing only if the specific condition is met
    if (this.closed === true) {
      return true; // Indicate that readline is already closed
    }
    
    if(data?.closed != "READLINE_SYM_CALL" ){
    this.closed = true; // Set closed state
    }
    
     if(data?.closed === "READLINE_SYM_CALL" ){
      return false
    }
    // Perform any cleanup if needed (e.g., destroying streams)
    return true; // Indicate that the readline is now closed
  },
    pause: function () {
    // Pauses the input stream (e.g., stops accepting new inputs)
    console.log("Input paused.");
    // Implement actual pause logic if required
  },

  resume: function () {
    // Resumes the input stream (e.g., starts accepting new inputs again)
    console.log("Input resumed.");
    // Implement actual resume logic if required
  },

  setPrompt: function (promptText) {
    // Sets the prompt to be used in subsequent question calls
    this.promptText = promptText;
  },

  prompt: function () {
    // Displays the current prompt (if set) and waits for user input
    if (this.promptText) {
      console.log(this.promptText);
    }
    // Normally you would wait for input here
    // Example: fetch input and process it
  },

  clearLine: function () {
    // Simulates clearing the current line (like clearing terminal input)
    this.buffer = "";
    console.clear(); // Clears the console output
    console.log("Line cleared.");
  },

  clearScreenDown: function () {
    // Simulates clearing the screen from the current line down
    console.clear(); // Clears the console output
    console.log("Screen cleared from current line down.");
  },

  write: function (data, key) {
    // Writes data to the output stream
    console.log(data);
  },

  on: function (event, handler) {
    // Mimics attaching event listeners for custom events
    // You would call \`handler()\` whenever the event occurs
    // For simplicity, we just log the event handler setup
  }

};`
); 
  
makeFile("readTermInput.js", `
import {readline} from "./readlineExample.js"

  // Usage example
  // const rl = prompt('Enter your name: ');
  await readline.question('hey you', (answer) => {
    console.log(\`You entered: \${answer}\`);
    readline.close();
  });`)  
  makeFile('todo-events.md', `### Additional Events

1. **\`access\`**:
   - **Description**: Emitted when a file or directory is accessed.
   - **Details**: Includes path and access type (read or execute).

   \`\`\`javascript
   this._emit('access', {
       type: 'access',
       path: path,
       details: {
           node: node,
           accessType: 'read' // or 'execute'
       }
   });
   \`\`\`

2. **\`update\`**:
   - **Description**: Emitted when metadata of a file or directory is updated, such as modification time or permissions.
   - **Details**: Includes path, node, and updated metadata.

   \`\`\`javascript
   this._emit('update', {
       type: 'update',
       path: path,
       details: {
           node: node,
           updatedProperties: {
               lastModified: node.lastModified,
               size: node.size,
               permissions: node.permissions // if applicable
           }
       }
   });
   \`\`\`

3. **\`permissionChange\`**:
   - **Description**: Emitted when permissions of a file or directory are changed.
   - **Details**: Includes path and new permissions.

   \`\`\`javascript
   this._emit('permissionChange', {
       type: 'permissionChange',
       path: path,
       details: {
           node: node,
           newPermissions: node.permissions // if permissions are part of the node properties
       }
   });
   \`\`\`

4. **\`link\`**:
   - **Description**: Emitted when a hard or symbolic link is created.
   - **Details**: Includes the source and target of the link.

   \`\`\`javascript
   this._emit('link', {
       type: 'link',
       path: path,
       details: {
           source: sourceNode,
           target: targetNode
       }
   });
   \`\`\`

5. **\`unlink\`**:
   - **Description**: Emitted when a link is removed.
   - **Details**: Includes the source and target of the link.

   \`\`\`javascript
   this._emit('unlink', {
       type: 'unlink',
       path: path,
       details: {
           node: node,
           target: targetNode
       }
   });
   \`\`\`

6. **\`moveTo\`**:
   - **Description**: Emitted when a file or directory is moved to a new location within the same parent directory.
   - **Details**: Includes the old and new paths.

   \`\`\`javascript
   this._emit('moveTo', {
       type: 'moveTo',
       path: path,
       details: {
           node: node,
           oldPath: oldPath,
           newPath: newPath
       }
   });
   \`\`\`

7. **\`create\`**:
   - **Description**: Emitted when a new file or directory is created.
   - **Details**: Includes the path and type (file or directory).

   \`\`\`javascript
   this._emit('create', {
       type: 'create',
       path: path,
       details: {
           node: node,
           type: node.type // 'file' or 'directory'
       }
   });
   \`\`\`

8. **\`sync\`**:
   - **Description**: Emitted when the filesystem is synchronized or when changes are committed.
   - **Details**: Includes information about the sync operation.

   \`\`\`javascript
   this._emit('sync', {
       type: 'sync',
       details: {
           timestamp: new Date().toISOString()
       }
   });
   \`\`\`
`)

  fs.mkdir('cool')
  makeFile('cool/package.json', JSON.stringify({
  "name": "my-app",
  "version": "1.0.0",
  "description": "An application that uses my-utils",
  "main": "index.js",
  "dependencies": {
    "my-utils": "file:../my-utils"
  },
  "scripts": {
    "start": "node index.js"
  },
  "author": "Your Name",
  "license": "ISC"
}))
 makeFile("iframe.html", `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iframe</title>
  </head>
  <body>
    <h1>Iframe Window</h1>
    <button onclick="callParentFunction()">Call Function in Parent</button>

    <script>
      // Function in the iframe
      function iframeFunction() {
        alert('Iframe function called from parent!');
      }

      // Function to call the parent function
      function callParentFunction() {
        const contents = window.parent.sharedData.fs.ls('/'); // Assume fs.ls returns an array of objects

        const formattedContents = contents.map(node => {
          const name = node.type === 'directory'
              ? node.key   // Blue for directories
              : node.key; // Pink for files
          return name;
        });

        document.body.innerHTML = formattedContents.join('<br>');
      }
    </script>
  </body>
  </html>
`)

  
  
 

makeFile("iframe2.html", `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Iframe Directory Indexer</title>
  <style>
    .folder {
      color: blue;
      cursor: pointer;
    }
    .file {
      color: pink;
      cursor: pointer;
    }
    #backButton {
      display: none;
    }
  </style>
</head>
<body>
  <h1>Iframe Directory Indexer</h1>
  <button id="backButton" onclick="goBack()">Go Back</button>
  <div id="fileList"></div>

  <script>
    let currentPath = '/';
    let previousPath = null;

    async function updateDirectory(path) {
      previousPath = currentPath;
      currentPath = path;

      const backButton = document.getElementById('backButton');
      if (currentPath === '/') {
        backButton.style.display = 'none';
      } else {
        backButton.style.display = 'inline';
      }

      try {
        // Get directory contents
        const contents = await window.parent.sharedData.fs.ls(currentPath);
        const fileList = document.getElementById('fileList');
        fileList.innerHTML = '';

        contents.forEach(function(node) {
          const link = document.createElement('a');
          link.href = '#';
          link.textContent = node.key;
          link.className = node.type === 'directory' ? 'folder' : 'file';

          link.addEventListener('click', async function(e) {
            e.preventDefault()
            if (node.type === 'directory') {
              await updateDirectory(currentPath + '/' + node.key);
            } else {
              try {
                const content = await window.parent.sharedData.fs.cat('', currentPath + '/' + node.key); 
                document.body.innerText =  content;
              } catch (error) {
                console.error('Error reading file:', error);
              }
            }
          });

          fileList.appendChild(link);
          fileList.appendChild(document.createElement('br'));
        });
      } catch (error) {
        console.error('Error listing directory contents:', error);
      }
    }

    function goBack() {
      if (previousPath !== null) {
        // Split current path, pop the last segment, and update path
        const pathSegments = previousPath.split('/');
        pathSegments.pop();
        const newPath = pathSegments.join('/') || '/';
        updateDirectory(newPath);
      }
    }

    // Initial load
    updateDirectory(currentPath);
  </script>
</body>
</html>
`);

  
  makeFile('repl.js', `  const prompt =  function(msg){
  return console.log({ readline: msg }); 
  // Prompts for input
  }
  
function repl(){
let input  = prompt()  

input = input.trim()
 
if(input != "exit"){ 
try{
console.log(eval(input)) 
}catch(err){

}finally{
repl()
}
 
}

 

}

repl()`)
  
  makeFile("newRepl.js", `import {readline} from "./readlineExample.js"

  // Usage example
  // const rl = prompt('Enter your name: ');
  
  var __EVAL = (s) => eval(void (__EVAL = \${__EVAL.toString()}); \${s}\`;
  
 async function repl(){
  
let input;
  
  await readline.question('hey you', (answer) => {
    input = answer
    readline.close();
  });
 
 input = input.trim()
 
 if(input != "exit"){ 
 try{
    console.log(__EVAL('1 + 1'))
  }catch(err){
  console.log(err.message)
  }finally{
  await repl()
  }
  
  }
 }
 await repl()`)
  
  makeFile("writefile.js", `import * as fs from "node:fs"

fsWrapper.writeFile('output-sync.txt', 'Hello, Sync World!', 'utf8');
console.log('Sync write complete.');`)
  
  makeFile('cool/index.js', 'console.log("Used from link!")')
  
  makeFile('hello.go', `// You can edit this code!
// Click here and start typing.
package main

import "fmt"

func main() {
	fmt.Println("Hello, 世界")
}`)
  
  makeFile('ansiCatcus', `\e[49m                                                \e[m
\e[49m                                                \e[m
\e[49m                    \e[38;2;0;12;0;49m▄\e[38;2;9;29;3;48;2;0;0;0m▄\e[38;2;12;44;2;48;2;0;0;0m▄\e[38;2;8;29;1;48;2;0;0;0m▄\e[38;2;12;40;2;48;2;0;0;0m▄\e[38;2;8;29;0;48;2;0;0;0m▄\e[38;2;0;5;0;49m▄\e[49m                     \e[m
\e[49m                   \e[38;2;1;6;0;48;2;0;7;0m▄\e[38;2;30;102;4;48;2;14;30;8m▄\e[38;2;30;101;1;48;2;22;76;1m▄\e[38;2;37;144;0;48;2;37;145;0m▄\e[38;2;27;106;0;48;2;27;105;0m▄\e[38;2;38;135;2;48;2;37;135;1m▄\e[38;2;28;75;3;48;2;26;93;1m▄\e[38;2;28;111;0;48;2;9;26;2m▄\e[38;2;7;16;4;48;2;0;7;0m▄\e[38;2;0;0;0;49m▄\e[49m                   \e[m
\e[49m           \e[38;2;246;109;155;49m▄\e[38;2;248;114;152;48;2;242;111;150m▄\e[38;2;247;109;148;48;2;249;111;150m▄\e[38;2;236;106;143;48;2;248;114;154m▄\e[49m   \e[38;2;4;4;4;48;2;0;0;0m▄\e[48;2;2;6;0m \e[38;2;31;104;3;48;2;30;103;5m▄\e[38;2;31;110;0;48;2;28;94;3m▄\e[48;2;38;144;0m \e[38;2;28;104;0;48;2;27;106;0m▄\e[38;2;37;134;1;48;2;37;135;2m▄\e[38;2;27;99;1;48;2;27;100;0m▄\e[48;2;30;111;0m \e[38;2;5;15;3;48;2;7;16;3m▄\e[48;2;0;0;0m \e[49m                   \e[m
\e[49m           \e[49;38;2;249;115;154m▀\e[38;2;107;48;65;48;2;250;112;153m▄\e[38;2;112;49;66;48;2;235;105;142m▄\e[38;2;113;49;67;48;2;231;102;139m▄\e[38;2;204;90;122;48;2;253;112;152m▄\e[38;2;248;113;149;48;2;246;113;151m▄\e[49m \e[48;2;0;0;0m \e[48;2;2;6;0m \e[48;2;31;104;3m \e[38;2;32;110;0;48;2;32;111;0m▄\e[38;2;37;145;0;48;2;37;146;0m▄\e[38;2;27;99;1;48;2;26;100;1m▄\e[38;2;32;105;4;48;2;32;110;4m▄\e[48;2;27;97;1m \e[38;2;30;111;0;48;2;29;111;0m▄\e[38;2;3;11;1;48;2;5;15;3m▄\e[38;2;2;2;2;48;2;15;15;15m▄\e[49m                   \e[m
\e[49m           \e[38;2;2;4;2;48;2;0;0;0m▄\e[38;2;22;78;5;48;2;19;57;6m▄\e[38;2;35;127;2;48;2;22;68;4m▄\e[38;2;33;122;1;48;2;20;67;4m▄\e[38;2;7;29;0;48;2;7;28;2m▄\e[48;2;0;0;0m \e[49m  \e[48;2;2;6;0m \e[48;2;31;104;3m \e[38;2;32;110;0;48;2;32;111;0m▄\e[38;2;37;143;0;48;2;37;145;0m▄\e[48;2;27;105;0m \e[38;2;37;135;1;48;2;37;135;2m▄\e[38;2;26;100;0;48;2;27;99;0m▄\e[48;2;30;111;0m \e[38;2;5;15;3;48;2;7;15;3m▄\e[38;2;0;0;0;48;2;14;14;14m▄\e[49m                   \e[m
\e[49m          \e[48;2;0;0;0m \e[38;2;0;2;0;48;2;1;1;1m▄\e[38;2;15;39;4;48;2;24;78;5m▄\e[38;2;25;80;3;48;2;36;128;1m▄\e[48;2;34;122;0m \e[38;2;7;30;0;48;2;7;29;0m▄\e[48;2;0;0;0m \e[49m \e[38;2;0;0;0;48;2;2;2;0m▄\e[48;2;2;6;0m \e[48;2;31;104;3m \e[38;2;31;110;0;48;2;31;110;1m▄\e[38;2;38;129;4;48;2;29;94;2m▄\e[38;2;27;104;0;48;2;28;104;0m▄\e[38;2;37;135;1;48;2;37;134;1m▄\e[38;2;28;99;0;48;2;27;99;0m▄\e[48;2;30;111;0m \e[48;2;7;16;4m \e[48;2;0;0;0m \e[49m                   \e[m
\e[49m           \e[48;2;2;2;2m \e[38;2;22;79;4;48;2;19;61;6m▄\e[38;2;35;126;1;48;2;31;111;4m▄\e[38;2;32;123;0;48;2;33;123;0m▄\e[38;2;27;107;0;48;2;21;81;2m▄\e[38;2;24;82;3;48;2;16;38;9m▄\e[38;2;17;63;1;48;2;5;8;5m▄\e[38;2;18;69;0;48;2;6;8;5m▄\e[38;2;14;53;0;48;2;2;6;0m▄\e[38;2;33;117;3;48;2;31;104;3m▄\e[48;2;31;110;0m \e[48;2;37;145;0m \e[48;2;27;106;0m \e[38;2;37;134;1;48;2;37;135;1m▄\e[38;2;27;98;0;48;2;28;99;0m▄\e[48;2;30;111;0m \e[48;2;7;16;4m \e[48;2;0;0;0m \e[49m                   \e[m
\e[49m           \e[49;38;2;0;0;0m▀\e[49;38;2;8;31;2m▀\e[38;2;0;3;0;48;2;17;57;0m▄\e[38;2;0;2;0;48;2;33;123;0m▄\e[38;2;22;77;2;48;2;27;107;0m▄\e[38;2;32;121;1;48;2;34;126;1m▄\e[38;2;33;116;2;48;2;32;108;4m▄\e[38;2;35;128;0;48;2;34;126;1m▄\e[38;2;26;95;0;48;2;26;99;0m▄\e[38;2;36;129;1;48;2;35;131;1m▄\e[38;2;29;82;4;48;2;29;111;0m▄\e[48;2;38;144;0m \e[48;2;27;106;0m \e[48;2;37;135;1m \e[38;2;26;99;0;48;2;27;99;0m▄\e[48;2;30;111;0m \e[38;2;7;16;4;48;2;3;11;1m▄\e[48;2;0;0;0m \e[49m                   \e[m
\e[49m             \e[49;38;2;0;0;0m▀\e[49;38;2;4;4;4m▀\e[38;2;0;0;0;48;2;10;30;4m▄\e[38;2;3;3;1;48;2;12;40;3m▄\e[38;2;0;0;0;48;2;13;39;4m▄\e[38;2;0;0;0;48;2;14;44;4m▄\e[38;2;1;5;0;48;2;9;33;2m▄\e[38;2;30;103;4;48;2;32;111;5m▄\e[38;2;31;110;0;48;2;31;101;2m▄\e[38;2;38;145;0;48;2;37;145;0m▄\e[48;2;27;106;0m \e[38;2;37;135;2;48;2;37;136;1m▄\e[38;2;26;71;3;48;2;28;97;1m▄\e[38;2;29;111;0;48;2;30;111;0m▄\e[38;2;5;15;3;48;2;5;15;4m▄\e[48;2;0;0;0m \e[49m                   \e[m
\e[49m                   \e[48;2;2;6;0m \e[38;2;31;104;3;48;2;31;103;4m▄\e[38;2;32;111;0;48;2;31;111;1m▄\e[38;2;38;145;0;48;2;39;145;0m▄\e[38;2;27;99;1;48;2;27;106;0m▄\e[38;2;36;133;1;48;2;37;136;1m▄\e[38;2;26;99;0;48;2;26;101;0m▄\e[48;2;30;111;0m \e[38;2;5;14;3;48;2;5;15;3m▄\e[48;2;0;0;0m \e[49m                   \e[m
\e[49m                   \e[48;2;2;6;0m \e[48;2;31;104;3m \e[38;2;31;110;0;48;2;31;111;0m▄\e[48;2;38;145;0m \e[38;2;26;102;0;48;2;24;78;3m▄\e[38;2;37;134;1;48;2;37;130;3m▄\e[38;2;27;100;0;48;2;26;100;0m▄\e[48;2;30;111;0m \e[38;2;5;15;3;48;2;3;11;1m▄\e[48;2;0;0;0m \e[49m                   \e[m
\e[49m                   \e[48;2;2;6;0m \e[38;2;30;103;4;48;2;31;104;3m▄\e[38;2;29;103;1;48;2;31;110;0m▄\e[48;2;38;145;0m \e[48;2;27;105;0m \e[38;2;37;134;1;48;2;37;135;1m▄\e[48;2;28;99;0m \e[48;2;30;111;0m \e[48;2;5;15;3m \e[48;2;0;0;0m \e[49m                   \e[m
\e[49m                   \e[48;2;2;6;0m \e[38;2;30;103;4;48;2;30;101;5m▄\e[38;2;30;110;0;48;2;28;82;5m▄\e[48;2;38;144;0m \e[38;2;27;105;0;48;2;27;106;0m▄\e[38;2;37;134;1;48;2;37;136;2m▄\e[38;2;27;99;0;48;2;27;100;0m▄\e[38;2;29;112;0;48;2;30;111;0m▄\e[38;2;3;9;0;48;2;5;15;4m▄\e[48;2;0;0;0m \e[49m                   \e[m
\e[49m          \e[38;2;0;0;0;49m▄\e[38;2;37;23;5;48;2;0;0;0m▄\e[38;2;44;27;2;48;2;0;0;0m▄\e[38;2;43;27;4;48;2;0;0;0m▄\e[38;2;43;26;4;48;2;0;0;0m▄▄▄▄▄\e[38;2;41;25;4;48;2;1;4;0m▄\e[38;2;42;29;4;48;2;18;62;2m▄\e[38;2;42;29;4;48;2;18;66;0m▄\e[38;2;42;30;4;48;2;23;87;0m▄\e[38;2;42;29;4;48;2;17;63;0m▄\e[38;2;42;30;4;48;2;22;80;1m▄\e[38;2;42;29;4;48;2;17;60;0m▄\e[38;2;42;29;4;48;2;17;67;0m▄\e[38;2;42;25;4;48;2;4;8;1m▄\e[38;2;43;26;4;48;2;0;0;0m▄▄▄▄▄\e[38;2;43;26;3;48;2;0;0;0m▄▄\e[38;2;44;27;3;48;2;0;0;0m▄\e[38;2;39;24;4;48;2;0;0;0m▄\e[38;2;9;0;0;49m▄\e[49m          \e[m
\e[49m          \e[48;2;0;0;0m \e[38;2;71;43;1;48;2;70;43;1m▄\e[48;2;124;75;0m \e[48;2;119;72;0m \e[38;2;116;71;0;48;2;115;71;0m▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\e[38;2;118;73;0;48;2;118;72;0m▄\e[38;2;123;75;0;48;2;123;75;1m▄\e[38;2;79;48;1;48;2;78;48;1m▄\e[48;2;0;0;0m \e[49m          \e[m
\e[49m          \e[49;38;2;0;0;0m▀\e[38;2;0;0;0;48;2;44;25;3m▄\e[38;2;28;18;3;48;2;56;33;0m▄\e[38;2;51;32;2;48;2;53;32;0m▄\e[38;2;48;30;4;48;2;53;31;0m▄\e[38;2;43;26;3;48;2;53;31;0m▄\e[38;2;42;26;2;48;2;53;31;0m▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\e[38;2;42;26;3;48;2;53;31;0m▄\e[38;2;47;29;4;48;2;52;31;0m▄\e[38;2;51;31;3;48;2;53;32;0m▄\e[38;2;31;19;6;48;2;55;33;0m▄\e[38;2;2;2;2;48;2;47;27;3m▄\e[49;38;2;0;0;0m▀\e[49m          \e[m
\e[49m           \e[38;2;2;2;0;48;2;2;0;0m▄\e[48;2;66;40;3m \e[38;2;121;74;0;48;2;122;74;0m▄\e[38;2;109;66;1;48;2;107;65;0m▄\e[38;2;97;58;0;48;2;96;56;0m▄\e[48;2;96;56;0m               \e[48;2;95;56;0m \e[38;2;95;57;0;48;2;95;56;0m▄\e[38;2;106;64;1;48;2;106;65;0m▄\e[38;2;121;73;0;48;2;120;73;0m▄\e[48;2;75;45;2m \e[48;2;2;2;2m \e[49m           \e[m
\e[49m           \e[48;2;2;2;0m \e[48;2;66;40;3m \e[48;2;120;74;0m \e[38;2;107;65;1;48;2;106;63;0m▄\e[38;2;97;57;0;48;2;96;57;0m▄\e[48;2;96;57;0m                \e[38;2;96;56;0;48;2;95;56;0m▄\e[38;2;107;65;1;48;2;107;64;1m▄\e[48;2;120;73;0m \e[48;2;75;45;2m \e[48;2;2;2;2m \e[49m           \e[m
\e[49m           \e[48;2;0;2;0m \e[38;2;67;40;3;48;2;66;40;3m▄\e[38;2;122;74;0;48;2;121;74;0m▄\e[38;2;108;65;1;48;2;107;65;1m▄\e[38;2;97;58;0;48;2;97;57;0m▄\e[48;2;96;57;0m                \e[38;2;95;56;0;48;2;96;57;0m▄\e[38;2;106;64;1;48;2;107;64;1m▄\e[48;2;121;73;0m \e[48;2;75;45;2m \e[48;2;2;2;2m \e[49m           \e[m
\e[49m           \e[38;2;0;0;0;48;2;2;2;2m▄\e[38;2;36;20;3;48;2;65;39;3m▄\e[38;2;68;41;1;48;2;117;72;0m▄\e[38;2;108;67;1;48;2;109;66;1m▄\e[38;2;97;57;0;48;2;97;58;0m▄\e[48;2;96;57;0m               \e[48;2;95;56;0m \e[38;2;96;56;0;48;2;94;56;0m▄\e[38;2;110;67;2;48;2;105;64;0m▄\e[38;2;78;47;2;48;2;116;70;0m▄\e[38;2;36;22;3;48;2;72;43;3m▄\e[38;2;0;0;0;48;2;2;2;2m▄\e[49m           \e[m
\e[49m             \e[38;2;0;0;0;48;2;17;12;2m▄\e[38;2;24;14;3;48;2;62;38;1m▄\e[38;2;76;47;3;48;2;96;57;0m▄\e[38;2;86;50;0;48;2;96;57;0m▄▄▄▄▄\e[38;2;86;51;0;48;2;96;57;0m▄\e[38;2;86;50;0;48;2;96;57;0m▄▄\e[38;2;86;51;0;48;2;96;57;0m▄\e[38;2;86;50;0;48;2;96;57;0m▄▄▄▄▄\e[38;2;86;51;0;48;2;96;57;0m▄\e[38;2;86;50;0;48;2;95;56;0m▄\e[38;2;81;49;3;48;2;95;57;0m▄\e[38;2;24;14;3;48;2;69;42;1m▄\e[38;2;10;10;0;48;2;20;10;0m▄\e[49;38;2;0;0;0m▀\e[49m            \e[m
\e[49m              \e[49;38;2;0;0;0m▀\e[38;2;0;0;0;48;2;28;18;1m▄\e[38;2;0;0;0;48;2;28;16;1m▄\e[38;2;0;0;0;48;2;28;18;0m▄\e[38;2;0;0;0;48;2;28;16;0m▄▄\e[38;2;0;0;0;48;2;28;16;1m▄\e[38;2;0;0;0;48;2;28;16;0m▄\e[38;2;0;0;0;48;2;28;16;1m▄\e[38;2;0;0;0;48;2;28;18;0m▄\e[38;2;0;0;0;48;2;29;18;1m▄\e[38;2;0;0;0;48;2;28;18;1m▄\e[38;2;0;0;0;48;2;28;16;0m▄\e[38;2;0;0;0;48;2;28;18;1m▄\e[38;2;0;0;0;48;2;28;16;1m▄\e[38;2;0;0;0;48;2;28;16;0m▄▄\e[38;2;0;0;0;48;2;28;18;0m▄\e[38;2;0;0;0;48;2;29;19;1m▄\e[49;38;2;7;0;0m▀\e[49m              \e[m`)
  
  makeFile("math.json", JSON.stringify({
  "func": "async function(args){ const math = (await import('https://esm.sh/mathjs')); const result = math.evaluate(args.join(' ')); return result ;}",
  "usage": ""
}))
  
  makeFile("test.json", JSON.stringify({
  "func": "async args => { term.echo('hello') }",
  "help": "Usage: says hello"
}))
  
  makeFile('readInput.js', `  const prompt =  function(msg){
  return console.log({ readline: msg }); 
  // Prompts for input
  }
  
const input  = prompt('hello')  

console.log("You said " + input)

const input2  = prompt('hello')  

console.log("You said " + input2)


console.log("From console!")

  `)
  
 makeFile("test.cpp", `// C++ program to display "Hello World"
  
// Header file for input output functions
#include <iostream>
using namespace std;
  
// Main() function: where the execution of program begins
int main()
{
    // prints hello world
    cout << "Hello World";
  
    return 0;
}`)
    
makeFile("test.ts", `function sayHello(name: string): string {
    return \`Hello, \${name}!\`;
}

const message = sayHello('World');
console.log(message);
`);
  
 makeFile("hello.php", `<?php
echo "Hello, World!";
?>
`);
 
  makeFile("hello.js", `console.log("Hello, World!");`);

    makeFile("hello.coffee", `console.log 'Hello, World!'`);
  
  makeFile('ansi.js', `const redText = '\x1b[31mThis text is red\x1b[0m';
const greenText = '\x1b[32mThis text is green\x1b[0m';

// Log colored text
console.log(redText);
console.log(greenText);`)
  
  makeFile('custom.js', `export const relativeImportFunction = ()=>'Hello from relative import function'`)
  
  makeFile('main.js', `
import { relativeImportFunction } from './custom.js';

console.log(relativeImportFunction());
`);
    //  
  makeFile('textFile.txt', 'Hello from the text file!');

makeFile('main2.js', `
import { readFileSync, readFile, writeFileSync } from "node:fs"
async function run(){
readFile('./src/textFile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log(readFileSync('./src/textFile.txt'))
}
await run()
`);
  
  makeFile('fetch.js', `async function getRepoData(owner, repo) {
  const url = \`https://api.github.com/repos/\${owner}/\${repo}\`;
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(\`GitHub API error: \${response.statusText}\`);
    }

    const data = await response.json();
    console.log('Repository Data:', data);
  } catch (error) {
    console.error(error.message);
  }
}

await getRepoData('octocat', 'Hello-World'); // Replace with the desired owner and repo`)
  
  makeFile("fetch_placeholders.js", `async function getJsonPlaceholderData(resource, id) {
  const url = \`https://jsonplaceholder.typicode.com/\${resource}/\${id}\`;
  
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(\`API error: \${response.statusText}\`);
    }

    const data = await response.json();
    console.log('\${resource} Data:', data);
  } catch (error) {
    console.error(error.message);
  }
}

await getJsonPlaceholderData('posts', 1); // Replace 'posts' and '1' with the desired resource and ID`)
  
   /* makeFile("pipe.js", `let data = '';

const printInfo = msg => console.log(\`\\x1b[1m\\x1b[36mi \${msg}\\x1b[0m\`);
const printError = msg => console.log(\`\\x1b[1m\\x1b[31mx \${msg}\\x1b[0m\`);

const displayResults = dataStr => {
    let data;
    try {
        data = JSON.parse(dataStr);
    } catch (err) {
        printError('Failed to parse the output into JSON.');
    }

    if (!data)
        printInfo('No data to display.');

    console.log(data);
}

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => data += chunk);
process.stdin.on('end', () => displayResults(data));`) */
  initializeFilesystem(fs, defaultStructure); 
   menu()
  //console.log(fs.trees())
  // term.echo("You may now enter commands.");
};


function makeFile(name, content){
   fs.touch(name)
  fs.cat("/", name,  content)
}

function initializeFilesystem(vfs, structure) {
    function createPath(path, content) {
        let parts = path.split('/');
        let currentPath = fs.pwd()

        parts.forEach((part, index) => {
            currentPath += (index > 0 ? '/' : '') + part;
            if (index < parts.length - 1) {
                // Create directories if they don't exist
                try {
                    vfs.mkdir(currentPath);
                } catch (error) {
                 // console.log(error)
                }
            } else {
                // Create file if it is the last part of the path
              try{
                if (content !== undefined) {
                    vfs.cat('>', currentPath, content);
                } else {
                    vfs.cat('>', currentPath, ''); // Create an empty file
                }
              }catch(err){
                
              }
            }
        });
    }

    Object.keys(structure).forEach(key => {
        if (structure[key] === 'directory') {
            createPath(key);
        } else if (structure[key].type === 'file') {
            createPath(key, structure[key].content);
        }
    });
}

// Example JSON structure
const defaultStructure = {
    "/etc":  { "type":"directory"},
    "/var": { "type": "directory"},
    "/home/user":  { "type":"directory"},
    "/etc/motd": { "type": "file", "content": "Welcome to the Unix-like virtual filesystem!" },
    "/var/log/syslog": { "type": "file", "content": "System log initialized." },
    "/home/user/README.txt": { "type": "file", "content": "This is the home directory of the user." }
};

 


// Call the boot sequence
bootSequence();

import {openpluginCompletion} from "https://esm.sh/openpluginclient"

 

 

async function sendPrompt(input, history){
 // console.log(input, history)
  let messages;
  
  if(history){
    messages = history
  }
  
  if(history?.length === 0 || !history){
    messages = []
    messages = [{"role":"system",content:"You are a helpful assistant."}]
    
    
 
 // console.log(history)
  } 
  
  messages.push({role:"user",content:input})
  //console.log(history)
 
  const results =  await openpluginCompletion({
  earlyAccessToken: "__extra__-c22a34e2-89a8-48b2-8474-c664b577526b", // (required)
  pluginName:null, // optional
  model: "gpt-4-0613", // optional
  messages: messages,
  temperature: 0, // optional
  // ...other openai.ChatCompletion.create arguments
})
 //console.log(messages)
  
  return results.choices[0].message.content
  
}

async function getIpInfo(ip = '') {
  try{
    const response = await fetch('https://freeipapi.com/api/json/' + ip, {
        method: 'GET'
    });

    const data = await response.json();

  
    return data 
  }catch(err){
    console.log(err.message)
  }
}

/*
{diff: {
    func: async (args) => {
        try {
            // Dynamically import the diff-match-patch module
            const diffMatchPatch = await import('https://esm.sh/diff-match-patch');

            // Get the two files to compare
            const file1 = args[0];
            const file2 = args[1];

            // Fetch the contents of the files
            const response1 = await fetch(file1);
            const response2 = await fetch(file2);

            // Parse the responses as text
            const text1 = await response1.text();
            const text2 = await response2.text();

            // Compute the diff
            const dmp = new diffMatchPatch.diff_match_patch();
            const diff = dmp.diff_main(text1, text2);

            // Create a pretty diff string
            let diffString = '';
            for (let op of diff) {
                if (op[0] === diffMatchPatch.DIFF_DELETE) {
                    diffString += `-${op[1]}\n`;
                } else if (op[0] === diffMatchPatch.DIFF_INSERT) {
                    diffString += `+${op[1]}\n`;
                } else {
                    diffString += ` ${op[1]}\n`;
                }
            }

            return diffString;
        } catch (error) {
            // Handle any errors that occur during execution
            return `Error: Unable to compute diff. ${error.message}`;
        }
    },
    help: 'Usage: diff file1 file2 - Computes the differences between two files.'
}}
*/

/*
Copy a file to the remote server:
You can copy files to or from a remote server using scp (Secure Copy), which works with SSH.
scp /local/path/to/file username@hostname:/remote/path

scp ~/documents/report.txt john@192.168.1.10:/home/john/

Certainly! The `ssh` (Secure Shell) command is used to securely connect to remote servers. Here are some common examples of how to use `ssh`:

### Basic SSH Connection

**Command:**
```bash
ssh username@hostname
```

**Example:**
```bash
ssh john@192.168.1.10
```
This command connects to the server at IP address `192.168.1.10` using the username `john`.

### Specifying a Port

If the SSH server is running on a port other than the default port `22`, you can specify it using the `-p` option.

**Command:**
```bash
ssh -p port username@hostname
```

**Example:**
```bash
ssh -p 2222 john@192.168.1.10
```
This connects to the server on port `2222`.

### Using a Private Key for Authentication

To use a specific private key file for authentication, use the `-i` option.

**Command:**
```bash
ssh -i /path/to/private_key username@hostname
```

**Example:**
```bash
ssh -i ~/.ssh/id_rsa john@192.168.1.10
```
This uses the private key `id_rsa` located in the `.ssh` directory for authentication.

### Running a Command on the Remote Server

You can run a command on the remote server without starting an interactive session.

**Command:**
```bash
ssh username@hostname 'command'
```

**Example:**
```bash
ssh john@192.168.1.10 'ls -la'
```
This runs `ls -la` on the remote server and returns the output.

### Copying Files Using SCP

You can copy files to or from a remote server using `scp` (Secure Copy), which works with SSH.

**Copy a file to the remote server:**

**Command:**
```bash
scp /local/path/to/file username@hostname:/remote/path
```

**Example:**
```bash
scp ~/documents/report.txt john@192.168.1.10:/home/john/
```

**Copy a file from the remote server:**

**Command:**
```bash
scp username@hostname:/remote/path/to/file /local/path
```

**Example:**
```bash
scp john@192.168.1.10:/home/john/report.txt ~/downloads/
```

### Using SSH Config File

To simplify connecting to different servers, you can set up a `~/.ssh/config` file with configurations for each host.

**Example `~/.ssh/config` file:**
```
Host myserver
    HostName 192.168.1.10
    User john
    Port 2222
    IdentityFile ~/.ssh/id_rsa
```

**Command to connect:**
```bash
ssh myserver
```
This uses the settings defined in the `~/.ssh/config` file for the `myserver` host.

These examples should cover a wide range of common use cases for the `ssh` command.


espeak - Converts text to speech (you can use it to "speak" fun messages)

*/

/*
{find: {
    func: async (args) => {
        try {
            // Dynamically import the fs and path modules
            const fs = await import("https://jspm.dev/fs");
            const path = await import("https://jspm.dev/path");
            
            // Parse arguments
            let dir = ".";
            let testName = "";
            let exec = false;
            let regex = false;
            let ignoreCase = false;
            let maxDepth = Infinity;
            let filesOnly = false;
            let dirsOnly = false;

            for (let i = 0; i < args.length; i++) {
                if (args[i] === "-name" && args[i + 1]) {
                    testName = args[++i];
                } else if (args[i] === "-exec" && args[i + 1]) {
                    exec = args[++i];
                } else if (args[i] === "-regex" && args[i + 1]) {
                    regex = args[++i];
                } else if (args[i] === "-i") {
                    ignoreCase = true;
                } else if (args[i] === "-maxdepth" && args[i + 1]) {
                    maxDepth = parseInt(args[++i]);
                } else if (args[i] === "-type" && args[i + 1] === "f") {
                    filesOnly = true;
                } else if (args[i] === "-type" && args[i + 1] === "d") {
                    dirsOnly = true;
                } else if (args[i].startsWith("-")) {
                    throw new Error(`Unknown option: ${args[i]}`);
                } else {
                    dir = args[i];
                }
            }

            // Convert testName to a regex
            if (regex) {
                testName = new RegExp(testName);
            } else {
                testName = new RegExp(`^${testName.replace(/\\/g, "\\\\")}$`, ignoreCase? "i" : "");
            }

            // Find files and directories
            const results = await findFiles(dir, testName, maxDepth, filesOnly, dirsOnly);

            // Execute command on results
            if (exec) {
                for (let file of results) {
                    await fs.promises.access(file);
                    const command = exec.replace({}, file);
                    await runCommand(command);
                }
            } else {
                return results.map(file => path.basename(file)).join("\n");
            }
        } catch (error) {
            // Handle any errors that occur during execution
            return `Error: Unable to execute find command. ${error.message}`;
        }
    },
    help: "Usage: find [dir] [-name testName] [-exec command] [-regex] [-i] [-maxdepth levels] [-type f|d] - Searches for files and directories based on the specified criteria."
}};

// Helper function to find files and directories
async function findFiles(dir, testName, maxDepth, filesOnly, dirsOnly, currentDepth = 0) {
    const results = [];

    // Read the contents of the directory
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    // Iterate over the entries
    for (let entry of entries) {
        const filePath = path.join(dir, entry.name);

        // Check if the entry is a file or directory
        if (entry.isDirectory()) {
            // If the entry is a directory, recursively search it
            if (currentDepth < maxDepth) {
                results.push(...await findFiles(filePath, testName, maxDepth, filesOnly, dirsOnly, currentDepth + 1));
            }
        } else {
            // If the entry is a file, check if it matches the test name
            if (testName.test(entry.name)) {
                results.push(filePath);
            }
        }
    }

    // Filter results based on file or directory type
    if (filesOnly) {
        results = results.filter(file => fs.lstatSync(file).isFile());
    } else if (dirsOnly) {
        results = results.filter(file => fs.lstatSync(file).isDirectory());
    }

    return results;
}

// Helper function to run a command
async function runCommand(command) {
    return new Promise((resolve, reject) => {
        const process = require("child_process").exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            } else {
                resolve(stdout.trim() + stderr.trim());
            }
        });
    });
}
*/
/*
{ssh: {
    func: async (args) => {
        try {
            const ssh2 = await import("https://esm.sh/ssh2@1.4.0");
            const net = await import("https://esm.sh/net@1.0.2");
            const crypto = await import("https://esm.sh/crypto-browserify@3.12.0");

            const ssh = new ssh2();

            // Parse arguments
            let username, hostname, port;
            for (let i = 0; i < args.length; i++) {
                if (args[i].includes('@')) {
                    [username, hostname] = args[i].split('@');
                } else if (args[i].includes(':')) {
                    [hostname, port] = args[i].split(':');
                }
            }

            // Set default values
            username = username || 'user';
            hostname = hostname || 'localhost';
            port = port || 22;

            // Connect to the dummy server
            const conn = await new Promise((resolve, reject) => {
                const socket = new net.Socket();
                socket.connect(port, hostname, () => {
                    resolve(socket);
                });
            });

            // Initialize the SSH connection
            ssh.connect({
                sock: conn,
                username,
                host: hostname,
                port,
                algorithms: {
                    cipher: ['aes128-ctr', 'aes256-ctr', 'aes256-cbc'],
                    hmac: ['hmac-sha2-256', 'hmac-sha2-512'],
                    kex: ['ecdh-sha2-nistp256', 'ecdh-sha2-nistp384', 'ecdh-sha2-nistp521'],
                    compress: ['none', 'zlib'],
                }
            });

            // Handle SSH events
            ssh.on('ready', () => {
                console.log('SSH connection established');
                ssh.shell((err, stream) => {
                    if (err) throw err;
                    stream.on('data', (data) => {
                        console.log(`SSH: ${data.toString('utf8')}`);
                    }).on('close', () => {
                        ssh.end();
                    });
                });
            });

            ssh.on('error', (err) => {
                console.log(`SSH error: ${err.message}`);
            });

            ssh.on('close', () => {
                console.log('SSH connection closed');
            });

            return 'SSH connection established. Type "exit" to disconnect.';
        } catch (error) {
            return `Error: Unable to establish SSH connection. ${error.message}`;
        }
    },
    help: "Usage: ssh [username@]hostname [port] - Establishes an SSH connection to a remote server."
}}
*/

/*
{
  mplayer: {
    func: async (args) => {
      try {
        // Dynamically import the Plyr module
        const Plyr = await import('https://cdn.plyr.io/3.6.4/plyr.js');

        // Create a new Plyr instance
        const player = new Plyr('video', {
          controls: ['play', 'progress', 'current-time', 'duration'],
        });

        // Parse arguments for file URL or YouTube video ID
        let url;
        let fileType;
        for (let i = 0; i < args.length; i++) {
          if (args[i].startsWith('http')) {
            url = args[i];
            fileType = 'video';
          } else if (args[i].startsWith('youtube:')) {
            url = `https://www.youtube.com/watch?v=${args[i].split(':')[1]}`;
            fileType = 'youtube';
          }
        }

        // Load the video
        if (fileType === 'video') {
          player.source = {
            type: 'video',
            sources: [
              {
                src: url,
                type: 'video/mp4',
              },
            ],
          };
        } else if (fileType === 'youtube') {
          player.source = {
            type: 'video',
            sources: [
              {
                src: `https://www.youtube.com/embed/${url.split('v=')[1]}`,
                provider: 'youtube',
              },
            ],
          };
        }

        // Play the video
        player.play();

        // Output playback information
        console.log(`Playing ${url}...`);
        console.log(`Press Ctrl+C to quit playback.`);
      } catch (error) {
        // Handle any errors that occur during execution
        return `Error: Unable to play video. ${error.message}`;
      }
    },
    help: 'Usage: mplayer [file|youtube:id] - Plays a video file or YouTube video in the browser.',
  },
}*/

/*
{play: {
  func: async (args) => {
    try {
      // Dynamically import the Howler library
      const Howler = await import('https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js');

      // Get the audio file URL from the arguments
      const url = args[0];
      if (!url) {
        return 'Error: No audio file URL provided.';
      }

      // Create a new Howler sound object
      const sound = new Howler.Howl({
        src: [url],
        format: ['mp3', 'wav'],
        onload: () => {
          console.log(`Loaded ${url}`);
        },
        onplay: () => {
          console.log(`Playing ${url}`);
        },
        onend: () => {
          console.log(`Finished playing ${url}`);
        }
      });

      // Play the audio
      sound.play();
    } catch (error) {
      // Handle any errors that occur during execution
      return `Error: Unable to play audio. ${error.message}`;
    }
  },
  help: 'Usage: play <audio_file_url> - Plays the specified audio file.'
}}
*/

    // Define the function to be executed on button click
    function handleClick() {
         const termBody = document.querySelector("#terminal-body").classList 
         
         const notif = document.querySelector(".block").classList
         
         
         if(termBody.contains("hidden")){
           termBody.remove('hidden')
           
         }else{
            termBody.add('hidden')
         }
      
      notif.toggle('hidden')
         
    }


   const messageButton = document.getElementById('message-btn');

    // Attach the click event listener to the button
    messageButton.addEventListener('click', handleClick);



var terminalWindow = {
 
  window: document.querySelector("#terminal-container"),
  terminal: document.querySelector("#terminal-body"),
  shortcut: document.querySelector(".prompt-shortcut"),
  input: document.querySelector(".termino-input"),
  
  init: function() {
    document.querySelector("#minimize-btn").addEventListener("click", terminalWindow.minimize);
    document.querySelector("#maximize-btn").addEventListener("click", terminalWindow.maximize);
    document.querySelector("#close-btn").addEventListener("click", terminalWindow.close);
    //document.querySelector(".js-open").addEventListener("click", prompt.open);
  //  prompt.input.focus();
   // prompt.input.addEventListener("blur", prompt.focus); 
      terminalWindow.terminal.addEventListener("click",  terminalWindow.focus);  
  },
  focus: function() {
    terminalWindow.input.focus();  
    //prompt.input.focus();
  },
  minimize: function() {
    terminalWindow.window.classList.remove("maximized");
    terminalWindow.window.classList.toggle("minimized");
  },
  maximize: function() {
    terminalWindow.window.classList.remove("minimized");
    terminalWindow.window.classList.toggle("maximized");
   // prompt.focus();
  },
  close: function() {
    terminalWindow.window.classList.add("destroyed");
    terminalWindow.window.classList.remove("maximized", "minimized");
   // prompt.shortcut.classList.remove("hidden");
   // prompt.input.value = "";
  },
  open: function() {
    terminalWindow.window.classList.remove("destroyed");
   // prompt.shortcut.classList.add("hidden");
   // prompt.focus();
  }
};

document.addEventListener("DOMContentLoaded", terminalWindow.init);


/* Termino.js Plug-in: Command History
Description: Add command history to your Termino.js apps!
*/

Termino.commandHistory = function(terminalInputSelector, maxCommands) {
try{
  if(document.querySelector(terminalInputSelector) == null){
    throw {message: `${terminalInputSelector} was not found`}
  }

 
let commandHistory = [];
let commandHistoryIndex = 0;
let commandHistoryMax = 10;
let commandHistoryCurrent = '';
  

  
  // ALLOW MAX COMMANDS TO BE SET. - DEFAULT IS 10 COMMANDS.
  if(maxCommands){
    // check if MaxCommands is number
  if(!isNaN(parseFloat(maxCommands)) && isFinite(maxCommands)){
    commandHistoryMax = maxCommands
  }else{
    throw {message: `${maxCommands} must be a NUMBER.`}
  }
  }  
  
  
function addCommandToHistory(command) {
  if (commandHistory.length >= commandHistoryMax) {
    commandHistory.shift();
  }
  commandHistory.push(command);
  commandHistoryIndex = commandHistory.length;
}
function getCommandFromHistory(direction, handleEmpty=false) {
  if (direction === 'up') {
    if (commandHistoryIndex > 0) {
      commandHistoryIndex--;
    }
  } else if (direction === 'down') {
    if (commandHistoryIndex < commandHistory.length - 1) {
      commandHistoryIndex++;
    }else{
      if(handleEmpty){
      return null
      }
    }
  }
  return commandHistory[commandHistoryIndex];
}

let commandInput = document.querySelector(terminalInputSelector);
commandInput.addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    addCommandToHistory(commandInput.value);
  } else if (e.keyCode === 38) {
    e.preventDefault()
    commandHistoryCurrent = getCommandFromHistory('up');
     if(commandHistoryCurrent != undefined){
    commandInput.value = commandHistoryCurrent;
     }
  } else if (e.keyCode === 40) { 
     e.preventDefault()
    commandHistoryCurrent = getCommandFromHistory('down', true);
   
    if(commandHistoryCurrent != undefined){
    commandInput.value = commandHistoryCurrent;
    } else{
       commandInput.value =  ""
     } 
  }
});
}catch(error){
  console.error(`Termino.js Command History Plugin Error: ${error.message}`)
  throw {
      message: `Termino.js Command History Plugin Error: ${error.message}`
    }
}  
}

/// EXAMPLE & USAGE

// TERMINO INPUT SELECTOR + MAX COMMANDS (OPTIONAL) - DEFAULT IS 10 COMMANDS
Termino.commandHistory(".termino-input", 3) 


// DEMO: KioskBoard Run: begin
function TerminoKeyBoard(options = {querySelector:'.js-kioskboard-input',termino:term }){
KioskBoard.run(options.querySelector, {
  keysArrayOfObjects:[
  {
    "0": "Q",
    "1": "W",
    "2": "E",
    "3": "R",
    "4": "T",
    "5": "Y",
    "6": "U",
    "7": "I",
    "8": "O",
    "9": "P"
  },
  {
    "0": "A",
    "1": "S",
    "2": "D",
    "3": "F",
    "4": "G",
    "5": "H",
    "6": "J",
    "7": "K",
    "8": "L"
  },
  {
    "0": "Z",
    "1": "X",
    "2": "C",
    "3": "V",
    "4": "B",
    "5": "N",
    "6": "M"
  }
],
  // keysNumpadArrayOfNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  // keysSpecialCharsArrayOfStrings: ['a', 'b', 'c'],
  // keysJsonUrl: 'kioskboard-keys-turkish.json',
  language: 'en',
  keysFontFamily: 'Barlow',
  keysFontWeight: '500',
  keysJsonUrl:'https://cdn.jsdelivr.net/npm/kioskboard@2.3.0/dist/kioskboard-keys-english.json',
  keysEnterCallback: handleTerm,
  // cssAnimationsStyle: 'fade',
  // keysFontSize: '20px',
   
  // keysAllowSpacebar: false,
  capsLockActive: false,
  
});

let disabled = false
  
function handleTerm(){
  
  if(disabled){
    return; /// handle ios errors on tap etc..
  }
  
  if(!disabled){
    disabled = true
  }
  
   setTimeout(() => {
     
     disabled = false
     
     }, 1000); // Delay of 1 second (1000 milliseconds)  
  
  const terminoInput = document.querySelector(".termino-input")
  const keyBoardInput = document.querySelector(options.querySelector)
  terminoInput.value = keyBoardInput.value
  
  keyBoardInput.value = ''
  
 terminoInput.dispatchEvent(new KeyboardEvent('keypress', {'keyCode':13})); //options.termino.echo(document.querySelector(options.querySelector).value)
}
  
  function open(event = null){
   event?.stopPropagation(); 
    document.querySelector(options.querySelector).dispatchEvent(new Event('focus'));
  }
  function active(){
    return  document.body.classList.contains('kioskboard-body-padding')
  }
 
 
  
  return{
    open,
    active
  }
}  

let btn = document.querySelector(".termino-keyboard")
const Termino_OnScreen = TerminoKeyBoard()
btn.addEventListener("click", (event) => {
  Termino_OnScreen.open(event) 
  
  //Termino_OnScreen.close(event) 
  //console.log(KioskBoard)
});

let killbtn = document.querySelector(".termino-kill")

killbtn.addEventListener("click", (event) => {
  
document.body.dispatchEvent(new KeyboardEvent('keydown', {
    key: 'c',
    code: 'KeyC',
    keyCode: 67,
    which: 67,
    ctrlKey: true,
    bubbles: true
}));

  
  //Termino_OnScreen.close(event) 
  //console.log(KioskBoard)
});


const themeNames = [
    {
        "themeName": "ubuntu",
        "description": "Dark, moody colors with Ubuntu's signature purple."
    },
    {
        "themeName": "monokai",
        "description": "High-contrast theme with vibrant colors on a dark background."
    },
    {
        "themeName": "solarized",
        "description": "Balanced color scheme with solarized dark and light variants."
    },
    {
        "themeName": "dracula",
        "description": "Dark, gothic colors with a strong purple accent."
    },
    {
        "themeName": "gruvbox",
        "description": "Retro, warm color palette with a focus on readability."
    },
    {
        "themeName": "nord",
        "description": "Cool, icy tones inspired by the Arctic."
    },
    {
        "themeName": "one-dark",
        "description": "Elegant and minimalistic dark theme with subtle accents."
    },
    {
        "themeName": "night-owl",
        "description": "Dark theme with deep blues and calming greens."
    },
    {
        "themeName": "tomorrow-night",
        "description": "Dark theme with a well-balanced contrast and color scheme."
    },
    {
        "themeName": "tokyonight",
        "description": "Futuristic dark theme with vibrant neon colors."
    },
    {
        "themeName": "pastel-on-dark",
        "description": "Soft pastel colors on a dark background for a soothing look."
    },
    {
        "themeName": "jellybeans",
        "description": "Bright, candy-colored theme with a playful vibe."
    },
    {
        "themeName": "solarized-light",
        "description": "Light variant of the Solarized theme with subtle color contrasts."
    },
    {
        "themeName": "dracula-soft",
        "description": "A softer take on the Dracula theme with muted colors."
    },
    {
        "themeName": "shades-of-purple",
        "description": "Various shades of purple for a rich and vibrant look."
    },
    {
        "themeName": "catppuccin",
        "description": "Creamy and smooth color palette for a cozy atmosphere."
    },
    {
        "themeName": "material",
        "description": "Inspired by Material Design with clean, modern aesthetics."
    },
    {
        "themeName": "onedarkpro",
        "description": "Refined version of the One Dark theme with improved readability."
    },
    {
        "themeName": "gruvbox-material",
        "description": "Material design-based Gruvbox with improved contrast."
    },
    {
        "themeName": "ayu-dark",
        "description": "Dark theme with a hint of warmth and balanced contrast."
    },
    {
        "themeName": "tokyo-night-storm",
        "description": "A stormy variant of the Tokyo Night theme with darker tones."
    },
    {
        "themeName": "solarized-dark",
        "description": "Dark variant of Solarized with balanced and readable colors."
    },
    {
        "themeName": "nimbus",
        "description": "Cloudy, soft colors for a calm and serene appearance."
    },
    {
        "themeName": "xresources",
        "description": "Classic Xresources theme with a retro feel."
    },
    {
        "themeName": "dracula-official",
        "description": "Official Dracula theme with rich, dark hues."
    },
    {
        "themeName": "gruvbox-light",
        "description": "Light variant of Gruvbox for a more subtle look."
    },
    {
        "themeName": "ayu-mirage",
        "description": "Mirage variant of Ayu with deeper and darker tones."
    },
    {
        "themeName": "monokai-pro",
        "description": "Enhanced Monokai with additional color variations and styles."
    },
    {
        "themeName": "nord-light",
        "description": "Light version of Nord with cool, icy colors."
    },
    {
        "themeName": "papercolor",
        "description": "Simple and clean theme with pastel tones."
    },
    {
        "themeName": "oceanic-next",
        "description": "Ocean-inspired colors with a modern, vibrant look."
    },
    {
        "themeName": "palenight",
        "description": "Soft, subdued colors for a night-time feel."
    },
    {
        "themeName": "solarized-eight-color-light",
        "description": "Solarized light with eight color variations for enhanced readability."
    },
    {
        "themeName": "material-palenight",
        "description": "Material theme with a palenight twist for a unique look."
    },
    {
        "themeName": "monokai-extended",
        "description": "Extended version of Monokai with additional color tweaks."
    },
    {
        "themeName": "github-dark",
        "description": "GitHub's dark theme for a clean, developer-friendly experience."
    },
    {
        "themeName": "github-light",
        "description": "GitHub's light theme with bright and airy colors."
    },
    {
        "themeName": "intellij-light",
        "description": "Light theme inspired by IntelliJ's default appearance."
    },
    {
        "themeName": "dracula-jetbrains",
        "description": "Dracula theme adapted for JetBrains IDEs with high contrast."
    },
    {
        "themeName": "base16-tomorrow-dark",
        "description": "Dark theme with Base16 Tomorrow's color palette."
    },
    {
        "themeName": "base16-solarized-light",
        "description": "Light variant of Base16 Solarized theme for gentle colors."
    },
    {
        "themeName": "abyss",
        "description": "Deep and dark theme with subtle color variations."
    },
    {
        "themeName": "cobalt2",
        "description": "Bright and vibrant cobalt blue theme with contrasting colors."
    },
    {
        "themeName": "dracula-extended",
        "description": "Extended Dracula theme with additional color options."
    },
    {
        "themeName": "earthsong",
        "description": "Earthy tones with a natural, grounded aesthetic."
    },
    {
        "themeName": "horizon",
        "description": "Smooth gradient colors inspired by the horizon."
    },
    {
        "themeName": "kimbie-dark",
        "description": "Rich, dark theme with warm, subdued colors."
    },
    {
        "themeName": "predawn",
        "description": "Cool colors evoking the quiet hours before dawn."
    },
    {
        "themeName": "soda",
        "description": "Bright and refreshing theme with playful colors."
    },
    {
        "themeName": "wombat",
        "description": "Dark theme with a comfortable, balanced color scheme."
    },
    {
        "themeName": "ms-dos",
        "description": "Classic MS-DOS style with black background and green text."
    },
    {
        "themeName": "classic-green-black",
        "description": "Green text on black background, reminiscent of old terminals."
    },
    {
        "themeName": "classic-amber-black",
        "description": "Amber text on a black background, classic retro style."
    },
    {
        "themeName": "classic-white-blue",
        "description": "White text on a blue background, popular in older command prompts."
    },
    {
        "themeName": "classic-black-green",
        "description": "Black background with green text, evoking early Unix terminals."
    },
    {
        "themeName": "classic-gray-black",
        "description": "Gray text on a black background, a classic terminal look."
    },
    {
        "themeName": "glitchy",
        "description": "Erratic colors and flicker effects for a glitchy, distorted appearance."
    }
]

 

class Demo {
  constructor() {
 

    /**
     * Demo Start
     */
    const commonKeyboardOptions = {
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button),
      theme: "simple-keyboard hg-theme-default hg-layout-default",
      physicalKeyboardHighlight: true,
      syncInstanceInputs: true,
      mergeDisplay: true,
      debug: true
    };

    this.keyboard = new Keyboard(".simple-keyboard-main", {
      ...commonKeyboardOptions,
      /**
       * Layout by:
       * Sterling Butters (https://github.com/SterlingButters)
       */
      layout: {
        default: [
    '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} q w e r t y u i o p [ ] \\',
    '{lock} a s d f g h j k l ; \' {enter}',
    '{shift} z x c v b n m , . / {shift}',
    '.com @ {space}'
  ],
  'shift': [
    '~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P { } |',
    '{lock} A S D F G H J K L : ',
    '{shift} Z X C V B N M &lt; &gt; ? {shift}',
    '.com @ {space}'
  ]
      },
      display: {
        "{escape}": "esc ⎋",
        "{tab}": "tab ⇥",
        "{backspace}": "backspace ⌫",
        "{enter}": "enter ↵",
        "{capslock}": "caps lock ⇪",
        "{shiftleft}": "shift ⇧",
        "{shiftright}": "shift ⇧",
        "{controlleft}": "ctrl ⌃",
        "{controlright}": "ctrl ⌃",
        "{altleft}": "alt ⌥",
        "{altright}": "alt ⌥",
        "{metaleft}": "cmd ⌘",
        "{metaright}": "cmd ⌘"
      }
    });

    this.keyboardControlPad = new Keyboard(".simple-keyboard-control", {
      ...commonKeyboardOptions,
      layout: {
        default: [
          "{prtscr} {scrolllock} {pause}",
          "{insert} {home} {pageup}",
          "{delete} {end} {pagedown}"
        ]
      }
    });

    this.keyboardArrows = new Keyboard(".simple-keyboard-arrows", {
      ...commonKeyboardOptions,
      layout: {
        default: ["{arrowup}", "{arrowleft} {arrowdown} {arrowright}"]
      }
    });

    this.keyboardNumPad = new Keyboard(".simple-keyboard-numpad", {
      
      layout: {
        default: [
     
        ]
      }
    });

    this.keyboardNumPadEnd = new Keyboard(".simple-keyboard-numpadEnd", {
      ...commonKeyboardOptions,
      layout: {
        default: ["{numpadsubtract}", "{numpadadd}", "{numpadenter}"]
      }
    });

    document.querySelector(".termino-input").addEventListener("input", () => {
      const input = document.querySelector(".termino-input").value;
      this.keyboard.setInput(input);
    });
  }

  onChange(input) {
    document.querySelector(".termino-input").value = input;
    this.keyboard.setInput(input);
  }

  onKeyPress(button) {

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (
      button === "{shift}" ||
      button === "{shiftleft}" ||
      button === "{shiftright}" ||
      button === "{capslock}"
    )
      this.handleShift();
  }

  handleShift() {
    const currentLayout = this.keyboard.options.layoutName;
    const shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  } 
}

//new Demo()
