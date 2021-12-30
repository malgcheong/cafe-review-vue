
export {table};
const table= {
    props:['userData'],
    template:`
        <div>
            <ul>
                <li v-for="user in userData">{{user}}</li>
            </ul>
        </div>
    `
}