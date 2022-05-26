const bar = () => console.log('bar')

const baz = () =>{setTimeout(() => {
    console.log("Hello everyone")
}, 0);console.log("baz")}

const foo = () => {
  console.log('foo')
  setTimeout(bar, 0)
  baz()
}

foo();
