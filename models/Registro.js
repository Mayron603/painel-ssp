const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
    userId: { 
        type: String, 
        required: true,
        index: true
    },
    username: { 
        type: String, 
        required: true 
    },
    // CAMPO ADICIONADO QUE FALTAVA
    batalhaoId: {
        type: String,
        required: true,
        index: true
    },
    ultimoAvisoEnviado: {
        type: Date,
        default: null
    },
    pontos: [
        {
            entrada: { 
                type: Date, 
                required: true 
            },
            saida: { 
                type: Date 
            }
        }
    ]
}, { timestamps: true });

// Índice composto para otimizar buscas
registroSchema.index({ userId: 1, batalhaoId: 1 });

module.exports = mongoose.model('Registro', registroSchema);