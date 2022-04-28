let slideLen;

export const rwd = {

  getSlideLen(){
    if(window.innerWidth < 768){
      slideLen = 40;
    }else if(window.innerWidth < 1024){
      slideLen = 27;
    } else{
      slideLen = 20;
    }
    return slideLen;
  }

}