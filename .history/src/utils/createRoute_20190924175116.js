/*
 * @Author: ruzhan
 * @Date: 2019-09-24 17:46:25
 * @Descripttion: 
 * @Org: copyright@meeruu
 * @Email: zhan.ru@meeruu.com
 */
 const createRouter = (Route, routerList = []) => {
   routerList.map((item) => {
    if(!item.children){
        return (
          it
        )
    } else {
        createRouter(item.children)
    }
   })
}

export default createRouter;