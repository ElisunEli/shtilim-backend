class AppConfig{
    public connectionString = process.env.CONNECTIONSTRING;
}
const appConfig = new AppConfig();
export default appConfig;