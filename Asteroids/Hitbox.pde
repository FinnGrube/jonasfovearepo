class Hitbox{
  private float x_min,x_max,y_min,y_max;
  
  public Hitbox(float x_min_, float x_max_, float y_min_, float y_max_){
   x_min = x_min_;
   x_max = x_max_;
   y_min = y_min_;
   y_max = y_max_;
  }
  
  public float xMax(){
    return x_max;
  }
  public float xMin(){
    return x_min;
  }
  public float yMax(){
    return y_max;
  }
  public float yMin(){
    return y_min;
  }
  
  public Boolean isHitting(Hitbox hit){
    boolean x_dir = between(hit.xMax(),this.xMin(),this.xMax()) || between(hit.xMin(),this.xMin(),this.xMax());
    boolean y_dir = between(hit.yMax(),this.yMin(),this.yMax()) || between(hit.yMin(),this.yMin(),this.yMax());
    
    return x_dir&&y_dir;
  }
  
  public Boolean between(float x, float a, float b){
    if(x>a&&x<b){
      return true;
    }
    
    return false;
  }
}