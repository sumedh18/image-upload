import {injectable} from 'angular/core';
from {AngularFire ,Angualarfiredatabase, firebaseListObservable } from 'angularfire2';
import { upload}  from './upload';
import * as firebase from 'firebase';

@Injectable()
export class UploadService {

 constructor(private af: AngularFire, private db: AngularDatabase{}

private basepath:string = './uploafd';
private uploadTask: firebase.storage.UploadTask;

publicload(upload: Upload)

} 
