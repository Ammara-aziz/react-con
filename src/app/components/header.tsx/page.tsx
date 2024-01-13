'use client'
const Header = (props: any) => {
    console.log(props)
    return <div className="flex flex-col gap-5 px-4">
       
        <div>this is is {props.name}</div>
    </div>
}; export default Header;

//  function add (a:number){
//      return a+a
//  }
//  add(5)
