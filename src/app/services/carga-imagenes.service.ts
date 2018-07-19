import { Injectable } from '@angular/core';

// Firebase
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { CargaComponent } from '../components/carga/carga.component';
import { FileItem } from '../models/file-item';

@Injectable()
export class CargaImagenesService {

  private CARPETA_IMAGENES = 'img';

  constructor( private db: AngularFirestore ) { }

  cargarImagenesFirebase( imagenes: FileItem[] ) {

    console.log( imagenes );

  }

  private guardarImagen( imagen: { nombre: string, url: string } ) {

    this.db.collection( `/${ this.CARPETA_IMAGENES }` ).add( imagen );

  }
}
