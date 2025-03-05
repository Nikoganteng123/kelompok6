<script>
import { rules, availableFacts } from './data.js';

export default {
    data() {
        return {
            availableFacts: availableFacts,
            selectedFacts: [],
            detectedDisasters: [],
            backwardResults: []
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

            // Jika tidak ada yang cocok, cari yang mendekati
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

            if (rules[disasterName]) {
                this.backwardResults = rules[disasterName].conditions;
            } else {
                this.backwardResults = ["Bencana tidak ditemukan dalam sistem."];
            }
        }
    }
};
</script>

<template>
    <div id="app">
        <h1>Sistem Pakar Bencana Alam</h1>

        <h2>Pilih Gejala yang Dirasakan:</h2>
        <div v-for="(value, key) in availableFacts" :key="key">
            <label>
                <input type="checkbox" v-model="selectedFacts" :value="key">
                {{ key.replace(/_/g, ' ').toUpperCase() }}
            </label>
        </div>

        <button @click="detectDisaster">Deteksi Bencana (Forward Chaining)</button>

        <h2>Hasil Deteksi:</h2>
        <div v-if="detectedDisasters.length > 0">
            <ul>
                <li v-for="disaster in detectedDisasters" :key="disaster.bencana">
                    <strong>{{ disaster.bencana.toUpperCase() }}</strong>
                    <p>Fakta Pendukung: {{ disaster.faktaPendukung.join(', ') }}</p>
                </li>
            </ul>
        </div>

        <h2>Cari Gejala dari Bencana (Backward Chaining)</h2>
        <input type="text" v-model="backwardInput" placeholder="Masukkan nama bencana">
        <button @click="backwardChaining(backwardInput)">Cek</button>

        <h2>Hasil Backward Chaining:</h2>
        <div v-if="backwardResults.length > 0">
            <p>Gejala yang berhubungan dengan {{ backwardInput.toUpperCase() }}:</p>
            <ul>
                <li v-for="condition in backwardResults" :key="condition">
                    {{ condition.replace(/_/g, ' ').toUpperCase() }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
}
</style>
