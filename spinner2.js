
const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];
let timer = 0;


for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write('\r ' + char);
  }, timer += 300);
}


setTimeout(() => {
  process.stdout.write('\n');
}, timer);






