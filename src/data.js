export const rules = {
    gempa_bumi: {
        conditions: ['getaran_tanah', 'retakan_tanah', 'bunyi_gemuruh', 'perpindahan_tanah'],
        facts: ['zona_rawan_gempa', 'dekat_sesar_aktif', 'struktur_bangunan_rapuh', 'kondisi_geologi_tidak_stabil']
    },
    banjir: {
        conditions: ['hujan_lebat', 'air_meluap', 'drainase_buruk', 'aliran_sungai_tersumbat'],
        facts: ['daerah_dataran_rendah', 'dekat_sungai', 'intensitas_hujan_tinggi', 'sistem_drainase_tidak_memadai']
    },
    longsor: {
        conditions: ['lereng_curam', 'tanah_lembek', 'hujan_terus_menerus', 'vegetasi_gundul'],
        facts: ['daerah_perbukitan', 'zona_rawan_longsor', 'struktur_tanah_rapuh', 'pembukaan_lahan_tidak_terkendali']
    },
    gunung_meletus: {
        conditions: ['aktivitas_magma', 'gempa_vulkanik', 'keluarnya_gas_beracun', 'perubahan_bentuk_gunung'],
        facts: ['gunung_api_aktif', 'dekat_kawah_aktif', 'zona_bahaya_tinggi', 'riwayat_letusan_sebelumnya']
    },
    tsunami: {
        conditions: ['gempa_bawah_laut', 'pergerakan_dasar_laut', 'air_laut_mundur_tiba_tiba', 'getaran_dahsyat'],
        facts: ['daerah_pesisir', 'dekat_zona_subduksi', 'ketinggian_rendah', 'tanpa_sistem_peringatan_dini']
    }
};

export const availableFacts = {
    getaran_tanah: false,
    retakan_tanah: false,
    bunyi_gemuruh: false,
    perpindahan_tanah: false,
    hujan_lebat: false,
    air_meluap: false,
    drainase_buruk: false,
    aliran_sungai_tersumbat: false,
    lereng_curam: false,
    tanah_lembek: false,
    hujan_terus_menerus: false,
    vegetasi_gundul: false,
    aktivitas_magma: false,
    gempa_vulkanik: false,
    keluarnya_gas_beracun: false,
    perubahan_bentuk_gunung: false,
    gempa_bawah_laut: false,
    pergerakan_dasar_laut: false,
    air_laut_mundur_tiba_tiba: false,
    getaran_dahsyat: false
};
