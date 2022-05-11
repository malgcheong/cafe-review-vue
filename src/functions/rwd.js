let slideLen;

export const rwd = {

  getSlideLen(){
    if(window.innerWidth < 768){
      slideLen = 30;
    }else if(window.innerWidth < 1024){
      slideLen = 20;
    } else{
      slideLen = 14;
    }
    return slideLen;
  }

}