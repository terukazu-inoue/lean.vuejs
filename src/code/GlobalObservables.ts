import { BehaviorSubject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

export class GlobalObservables
{
  private static sInstance?: GlobalObservables = undefined;
  private static sFuncInstance = () => {
    GlobalObservables.sInstance = new GlobalObservables();
    GlobalObservables.sFuncInstance = () => GlobalObservables.sInstance!;
    return GlobalObservables.sInstance;
  };
  public static get Instance() { return GlobalObservables.sFuncInstance(); }

  private mRememberMeSubject = new BehaviorSubject<boolean>(false);

  public oRemenberMe(){
    return this.mRememberMeSubject.asObservable()
      .pipe(distinctUntilChanged());
  } 
  public setRememberMe(value: boolean){
    this.mRememberMeSubject.next(value);
  }
}