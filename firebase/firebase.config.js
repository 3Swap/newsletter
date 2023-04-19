const admin = require('firebase-admin');
const { getFirestore } = require('firebase-admin/firestore');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: 'service_account',
      project_id: 'swap-launchpad',
      private_key_id: '23d5c5efb92013268744118b318767bb36bee8c9',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC41SS+W/f8jbGX\nr6pe0PGEP47rFxodGSt6eqikVaqiTgeIzR++shs8hgW9jb4GLnusyVOc21EIaJt5\nZyx6K8FSbF2Bx8l+di1Hva92eVNoqqHOv+GQtsHh6vEZD6hA1XUuBePLMEWemDZj\nG/g34FVYxPHxjcY5sQAWf1IJfr/zhfq/0skyBgGqgB+1E5L9pHO2FN94KbppjXoI\ng0HoVFdIjSQJDdI5srDuXU9HV+mbjFfCsRx/8aLVtaIhj0drBDnnquGNW/YMk3Gp\nK1eI58M4qAkb3j5GXBOL9SH1JslszWiosylAQHohN3GP3OwvPL/xtJMTKTmhFmv4\nddy5o3NjAgMBAAECggEAVdrb6Hh75ppCxfzZHJXdudp0Hotqm92XLptPPpZ0XlP0\nd/0gI8pDkIeInxX6EJEC7a3O4uuU5l0A6xGbvVwZvpmLjb8pv05RliNsH5IXxmSM\nKKdEtZ3OzYv+Ve/J7eO5PJmLyFQx4os9qCfT0tCnlEZXRCbgzueC7PBTQQnZS9pE\nEzAeoVz66PI3APKNfu2pUo6VXlEAcffe3RQWdennH+h7EtA0/+OWH+Ew8toAsfXx\n37poC4zo2JPyJ54jjzaPY5FknDPW/zm0Npm0SPLXVuTmR9xI+JsBv5zLQgKnhCWl\nqK/qW2CiztuZ6UEQLxkweSSb7lgVn0hvtw+2xmmo8QKBgQDdhqPC2Ys8VZ5Q69EL\nOdh977mK+Ockx+ZdrmYr2Vv89TCYsiBP2MXyzy2CE3rWNuKkEkSj6YLDvootMbqu\nLVM+dNBfO0lS1JQi1FSTAwYMLEaTCcrmWMqC3InJF82/NJfjf4Cz1tzqfqvhUUqx\nZpIH43CC21CJ4Jvzhqte9vaGRQKBgQDVmK35oolMzuS8EuWI+utTPEZOnqhmRzcO\nc56t7s80hLYdA4Mhq1flQ4m97kJUQ47X9BEc5Dqpj3Oe0cocTI7m8gOybQvmYmRL\nC2q3P1V6FQpYroDLLiLtfI3z+nH4LtkV1YKO4aKuRDAYkitrrMlVOaqQuR26b+pf\n9d/V9SDhhwKBgQChiAfpkQ/CUvw6LXolIW0Hh8JX399MJqeIMB84Yip9bZyd+2Us\nU/kjcIbSjrnHcgYZdWivzRoY+dtv0Q866roElNFMX8K7r17FduakvFOwlKhxl3Zo\nON6SRZYDGGRixErtDJAgktBL/Un/5nL8oLpjHilwgdNcdnfBP7W+bX6dsQKBgQCJ\nwxCqil9dr68tck6i+5sdsylxebkJRnNHGeFFM1pm+BVxPxurcpSdJONJIcucB3qw\n5BTJepYvWHts+sgNWn9sirlBsj1TmTAwiquIhwu9Uqa6rcoZwab7XzM7IdOyC50u\nDOhI+VRwa0BOCLCCoQ21rxzIfOykm5whyjZVC+XqLwKBgQDY6nJBYqTXlzRMVtdV\n9RSKw+Im0sQpxOSyqH293CtiFTmPv3fPD6AZRHO2e5xpdsSWFcJv6Lu8HkmWDJ7E\nkqxjB9iw2DoZE+zbty1LshRwIY6nZK9pjunbRAIOTGf/fV7oXP8D9DQEEDkK78Xe\nqHQaYXUgkNWPUbcR3duFSRe+ew==\n-----END PRIVATE KEY-----\n',
      client_email:
        'firebase-adminsdk-1hyk3@swap-launchpad.iam.gserviceaccount.com',
      client_id: '117205600740584407476',
      auth_uri: 'https://accounts.google.com/o/oauth2/auth',
      token_uri: 'https://oauth2.googleapis.com/token',
      auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
      client_x509_cert_url:
        'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-1hyk3%40swap-launchpad.iam.gserviceaccount.com',
    }),
  });
}
const db = getFirestore();

module.exports = { db };
