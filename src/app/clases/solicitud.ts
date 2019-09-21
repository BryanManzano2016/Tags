export class Solicitud {
  nombreWeb: string;
  nombreEtiqueta: string;
  palabra: string;
  elementos: string[];
  constructor(nombreWeb: string, nombreEtiqueta: string, palabra: string, elementos: string[]) {
    this.nombreWeb = nombreWeb;
    this.nombreEtiqueta = nombreEtiqueta;
    this.palabra = palabra;
    this.elementos = elementos;
  }
}
