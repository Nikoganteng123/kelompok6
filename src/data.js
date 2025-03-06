export const rules = {
    gempa_bumi: {
        conditions: [
            'getaran_tanah', 
            'retakan_tanah', 
            'bunyi_gemuruh', 
            'perpindahan_tanah', 
            'lampu_berkedip_tiba_tiba', // Tambahan: gangguan listrik akibat getaran
            'hewan_berperilaku_aneh'     // Tambahan: indikasi alamiah dari hewan
        ],
        facts: [
            'zona_rawan_gempa', 
            'dekat_sesar_aktif', 
            'struktur_bangunan_rapuh', 
            'kondisi_geologi_tidak_stabil', 
            'riwayat_gempa_sebelumnya',  // Tambahan: histori seismik
            'kepadatan_penduduk_tinggi'   // Tambahan: faktor risiko populasi
        ]
    },
    banjir: {
        conditions: [
            'hujan_lebat', 
            'air_meluap', 
            'drainase_buruk', 
            'aliran_sungai_tersumbat', 
            'tanah_jenuh_air',           // Tambahan: tanah tidak mampu menyerap lagi
            'gelombang_tinggi'           // Tambahan: banjir rob akibat pasang laut
        ],
        facts: [
            'daerah_dataran_rendah', 
            'dekat_sungai', 
            'intensitas_hujan_tinggi', 
            'sistem_drainase_tidak_memadai', 
            'penebangan_hutan',          // Tambahan: deforestasi meningkatkan risiko
            'urbanisasi_berlebihan'      // Tambahan: permukaan tanah tertutup beton
        ]
    },
    longsor: {
        conditions: [
            'lereng_curam', 
            'tanah_lembek', 
            'hujan_terus_menerus', 
            'vegetasi_gundul', 
            'getaran_mesin_berat',       // Tambahan: aktivitas manusia seperti konstruksi
            'erosi_tanah_berlebih'       // Tambahan: hilangnya lapisan penahan tanah
        ],
        facts: [
            'daerah_perbukitan', 
            'zona_rawan_longsor', 
            'struktur_tanah_rapuh', 
            'pembukaan_lahan_tidak_terkendali', 
            'curah_hujan_ekstrem',       // Tambahan: faktor cuaca ekstrem
            'aktivitas_tambang'          // Tambahan: eksploitasi tanah
        ]
    },
    gunung_meletus: {
        conditions: [
            'aktivitas_magma', 
            'gempa_vulkanik', 
            'keluarnya_gas_beracun', 
            'perubahan_bentuk_gunung', 
            'suhu_kawah_meningkat',      // Tambahan: indikasi aktivitas termal
            'abu_vulkanik_bertebaran'    // Tambahan: tanda awal erupsi
        ],
        facts: [
            'gunung_api_aktif', 
            'dekat_kawah_aktif', 
            'zona_bahaya_tinggi', 
            'riwayat_letusan_sebelumnya', 
            'tekanan_magma_tinggi',      // Tambahan: faktor geologi internal
            'kurangnya_pemantauan'       // Tambahan: minimnya mitigasi
        ]
    },
    tsunami: {
        conditions: [
            'gempa_bawah_laut', 
            'pergerakan_dasar_laut', 
            'air_laut_mundur_tiba_tiba', 
            'getaran_dahsyat', 
            'suara_gemuruh_dari_laut',   // Tambahan: indikasi akustik dari gelombang
            'kerusakan_pantai_tiba_tiba' // Tambahan: efek awal gelombang kecil
        ],
        facts: [
            'daerah_pesisir', 
            'dekat_zona_subduksi', 
            'ketinggian_rendah', 
            'tanpa_sistem_peringatan_dini', 
            'riwayat_tsunami_sebelumnya', // Tambahan: histori bencana
            'struktur_bangunan_lemah'    // Tambahan: kerentanan infrastruktur
        ]
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
    getaran_dahsyat: false,
    lampu_berkedip_tiba_tiba: false,     // Tambahan
    hewan_berperilaku_aneh: false,       // Tambahan
    tanah_jenuh_air: false,              // Tambahan
    gelombang_tinggi: false,             // Tambahan
    getaran_mesin_berat: false,          // Tambahan
    erosi_tanah_berlebih: false,         // Tambahan
    suhu_kawah_meningkat: false,         // Tambahan
    abu_vulkanik_bertebaran: false,      // Tambahan
    suara_gemuruh_dari_laut: false,      // Tambahan
    kerusakan_pantai_tiba_tiba: false    // Tambahan
};