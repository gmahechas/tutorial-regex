"use strict";

const paragraph = `La leyenda cuenta que el misterioso Pueblo Lavanda tiene en su tonada,
        un mensaje que solo3 puede ser captado en su versión japonesa de Game
        Boy. Según cuentan, los jovenes4 pueden  escuchar en esta
        versión pequeños murmullos producidos por la bitonalidad de la melodía,
        que son captados por la sensibilidad de sus5 oídos, los cuales
        conducirían6 a los oyentes a actos sensibles8.`;

const paragraph2 = `eltempera2020 second`;

console.log('1:::', paragraph.replace(/\d/g, '').replace(/\s\s/g, ' '));
console.log('2:::', paragraph2.replace(/\w+/g, 'creepypastas'));
