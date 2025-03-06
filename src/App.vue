<script>
import { rules, availableFacts } from './data.js';

export default {
    data() {
        return {
            availableFacts: availableFacts,
            selectedFacts: [],
            detectedDisasters: [],
            backwardResults: [],
            backwardInput: ''
        };
    },
    methods: {
        detectDisaster() {
            this.detectedDisasters = [];

            for (const [disaster, data] of Object.entries(rules)) {
                const allConditionsMet = data.conditions.every(condition => this.selectedFacts.includes(condition));

                if (allConditionsMet) {
                    this.detectedDisasters.push({
                        bencana: disaster,
                        faktaPendukung: data.facts.filter(fact => this.selectedFacts.includes(fact))
                    });
                }
            }

            if (this.detectedDisasters.length === 0) {
                let closestMatch = null;
                let maxMatch = 0;

                for (const [disaster, data] of Object.entries(rules)) {
                    const matchedConditions = data.conditions.filter(condition => this.selectedFacts.includes(condition));
                    
                    if (matchedConditions.length > maxMatch) {
                        maxMatch = matchedConditions.length;
                        closestMatch = {
                            bencana: disaster,
                            faktaPendukung: matchedConditions
                        };
                    }
                }

                if (closestMatch) {
                    this.detectedDisasters.push(closestMatch);
                }
            }
        },
        backwardChaining(disasterName) {
            this.backwardResults = [];
            const formattedDisasterName = disasterName.toLowerCase().replace(/\s+/g, '_');

            if (rules[formattedDisasterName]) {
                this.backwardResults = rules[formattedDisasterName].conditions;
            } else {
                this.backwardResults = ["Bencana tidak ditemukan dalam sistem."];
            }
        },
        formatText(text) {
            return text.replace(/_/g, ' ');
        },
        // Fungsi baru untuk mereset checkbox
        resetCheckboxes() {
            this.selectedFacts = [];
            this.detectedDisasters = []; // Opsional: reset juga hasil deteksi
        }
    }
};
</script>

<template>
    <div id="app" class="container">
        <h1 class="title">Sistem Pakar Bencana Alam</h1>

        <div class="card">
            <h2>Pilih Gejala yang Dirasakan</h2>
            <div class="checkbox-grid">
                <label v-for="(value, key) in availableFacts" :key="key" class="checkbox-container">
                    <input type="checkbox" v-model="selectedFacts" :value="key">
                    <span class="checkmark"></span>
                    <span class="checkbox-label">{{ formatText(key).toUpperCase() }}</span>
                </label>
            </div>
            <div class="button-group">
                <button @click="detectDisaster" class="btn">Deteksi Bencana (Forward Chaining)</button>
                <button @click="resetCheckboxes" class="btn reset-btn">Reset Checkbox</button>
            </div>
        </div>

        <div class="card" v-if="detectedDisasters.length > 0">
            <h2>Hasil Deteksi</h2>
            <ul class="result-list">
                <li v-for="disaster in detectedDisasters" :key="disaster.bencana">
                    <strong>{{ formatText(disaster.bencana).toUpperCase() }}</strong>
                    <p>Fakta Pendukung: {{ disaster.faktaPendukung.map(fact => formatText(fact)).join(', ') }}</p>
                </li>
            </ul>
        </div>

        <div class="card">
            <h2>Cari Gejala dari Bencana (Backward Chaining)</h2>
            <div class="input-group">
                <input 
                    type="text" 
                    v-model="backwardInput" 
                    placeholder="Masukkan nama bencana (contoh: gempa bumi)"
                    class="input-field"
                >
                <button @click="backwardChaining(backwardInput)" class="btn">Cek</button>
            </div>

            <div v-if="backwardResults.length > 0" class="result-section">
                <p>Gejala yang berhubungan dengan {{ formatText(backwardInput).toUpperCase() }}:</p>
                <ul class="result-list">
                    <li v-for="condition in backwardResults" :key="condition">
                        {{ formatText(condition).toUpperCase() }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    min-height: 100vh;
    background: linear-gradient(-45deg, #0f3443, #34e89e, #0f3443, #34e89e);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.container {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
    position: relative;
    z-index: 1;
}

.title {
    color: white;
    text-align: center;
    margin-bottom: 40px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    font-size: 2.5em;
    letter-spacing: 2px;
}

.card {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
}

h2 {
    color: #0f3443;
    margin-bottom: 20px;
    font-weight: 600;
}

.checkbox-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-bottom: 20px;
}

.checkbox-container {
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;
    color: #333;
}

.checkbox-container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 2px solid #34e89e;
    border-radius: 4px;
    transition: all 0.3s;
}

.checkbox-container:hover input ~ .checkmark {
    background-color: #f0f0f0;
}

.checkbox-container input:checked ~ .checkmark {
    background-color: #34e89e;
    border-color: #34e89e;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox-container input:checked ~ .checkmark:after {
    display: block;
}

.checkbox-container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.checkbox-label {
    font-size: 14px;
    line-height: 20px;
    color: #0f3443;
}

.btn {
    background: #0f3443;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
}

.btn:hover {
    background: #34e89e;
    color: #0f3443;
    transform: translateY(-2px);
}

.reset-btn {
    background: #e63946; /* Warna merah untuk tombol reset */
}

.reset-btn:hover {
    background: #f4a261; /* Warna hover berbeda */
    color: #0f3443;
}

.button-group {
    display: flex;
    justify-content: space-between; /* Tombol diposisikan di kiri dan kanan */
    align-items: center;
}

.input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.input-field {
    flex: 1;
    padding: 12px;
    border: 1px solid #34e89e;
    border-radius: 5px;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.8);
    transition: all 0.3s;
}

.input-field:focus {
    outline: none;
    border-color: #0f3443;
    box-shadow: 0 0 5px rgba(15, 52, 67, 0.3);
}

.result-list {
    list-style: none;
    padding: 0;
    text-align: left;
}

.result-list li {
    background: rgba(245, 245, 245, 0.95);
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    border-left: 4px solid #34e89e;
}

.result-section {
    margin-top: 20px;
}

.result-section p {
    color: #0f3443;
    margin-bottom: 10px;
    font-weight: 500;
}
</style>