module.exports = function(server) {
  // Install a `/` route that returns server status
  var User = server.models.User;
  var Role = server.models.Role;
  var Deuda = server.models.Deuda;
  var Equidad = server.models.Equidad;
  var Financiero = server.models.Financiero;
  var Crypto = server.models.Crypto;

  User.create({
    email: 'admin@admin.com', password: 'password'
  }, function(err) {
    if(err) {
      console.log(err);
    }
  });

  Deuda.count(function(err, count) {
    if(err) {
      console.log(err);
      return;
    }
    if(count > 0) return;

    Deuda.create([
      {
        tasa_min: '13.26%',
        tasa_max: '13.26%',
        monto_min: '$250 MXN',
        monto_max: '$50 M MXN',
        link: 'http://mellow.online'
      },
      {
        tasa_min: '6.08%',
        tasa_max: '6.08%',
        monto_min: '$250 MXN',
        monto_max: '$50 M MXN',
        link: 'http://mellow.online'
      },
      {
        tasa_min: '6.08%',
        tasa_max: '6.08%',
        monto_min: '$10,000 MXN',
        monto_max: 'N/A',
        link: 'http://mellow.online'
      },
      {
        tasa_min: '10.60%',
        tasa_max: '10.60%',
        monto_min: '$20,000 MXN',
        monto_max: 'N/A',
        link: 'http://mellow.online'
      },
      {
        tasa_min: '13.26%',
        tasa_max: '13.26%',
        monto_min: '$250 MXN',
        monto_max: '$50 M MXN',
        link: 'http://mellow.online'
      },
      {
        tasa_min: '10.60%',
        tasa_max: '10.60%',
        monto_min: '$20,000 MXN',
        monto_max: 'N/A',
        link: 'http://mellow.online'
      },
      {
        tasa_min: '13.26%',
        tasa_max: '13.26%',
        monto_min: '$250 MXN',
        monto_max: 'N/A',
        link: 'http://mellow.online'
      }
    ], function(err) {
      if (err) {
        console.log(err);
      }
    })
  });

  Equidad.count(function(err, count) {
    if(err) {
      console.log(err);
      return;
    }
    if(count > 0) return;

    Equidad.create([
      {
        ronda: '4,250,000',
        inversion: '81%',
        tipo: 'Equity',
        industria: 'Fintech',
        stage: 'Serie A',
        link: 'http://mellow.online'
      },
      {
        ronda: '5,600,000',
        inversion: '29%',
        tipo: 'Nota Convertible',
        industria: 'Educación',
        stage: 'Seed',
        link: 'http://mellow.online'
      },
      {
        ronda: '5,600,000',
        inversion: '29%',
        tipo: 'Nota Convertible',
        industria: 'Educación',
        stage: 'Seed',
        link: 'http://mellow.online'
      }
    ], function(err) {
      if (err) {
        console.log(err);
      }
    })
  });

  Financiero.count(function(err, count) {
    if(err) {
      console.log(err);
      return;
    }
    if(count > 0) return;

    Financiero.create([
      {
        producto: 'gbmf2',
        tipo: 'Renta variable',
        plazo: 'Diario',
        calificacion: 'AAA',
        rendimiento: '22%',
        link: 'http://mellow.online'
      },
      {
        producto: 'SantCrea',
        tipo: 'Deuda',
        plazo: '24 horas',
        calificacion: 'AAA+',
        rendimiento: '5%',
        link: 'http://mellow.online'
      },
      {
        producto: 'B+EDUCA',
        tipo: 'Fondo de fondos',
        plazo: '72 horas',
        calificacion: 'BB-',
        rendimiento: '6.3%',
        link: 'http://mellow.online'
      },
      {
        producto: 'NTC-CP',
        tipo: 'Deuda',
        plazo: '6 meses',
        calificacion: 'NA',
        rendimiento: '5%',
        link: 'http://mellow.online'
      },
      {
        producto: 'Sura2218',
        tipo: 'Deuda',
        plazo: '3 meses',
        calificacion: 'A',
        rendimiento: '6.3%',
        link: 'http://mellow.online'
      }
    ], function(err) {
      if (err) {
        console.log(err);
      }
    })
  });

  Crypto.count(function(err, count) {
    if(err) {
      console.log(err);
      return;
    }
    if(count > 0) return;

    Crypto.create([
      {
        pagina: 'Bitcoin.com',
        compra: '$23.34',
        venta: '$42.98',
        link: 'http://bitcoin.com'
      },
      {
        pagina: 'Cubits',
        compra: '$25.34',
        venta: '$41.98',
        link: 'http://cubits.com'
      },
      {
        pagina: 'Indacoin',
        compra: '$23.34',
        venta: '$43.98',
        link: 'http://indacoin.com'
      }
    ], function(err) {
      if (err) {
        console.log(err);
      }
    })
  });
};
