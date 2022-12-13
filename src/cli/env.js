const parseEnv = () => {
    const env = process.env;
    const prefix = 'RSS_';
    const rssEnvs = Object.entries(env)
        .filter(([key, _]) => key.startsWith(prefix))
        .map(([key, value]) => `${key}=${value}`)
        .join('; ');
    console.log(rssEnvs);
};

parseEnv();