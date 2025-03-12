package cordova.plugin.auth;

import org.apache.cordova.*;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import com.google.auth.oauth2.GoogleCredentials;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Collections;

public class AuthTokenPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("getAccessToken".equals(action)) {
            // O primeiro argumento será o conteúdo do service-account.json
            String jsonCredentials = args.getString(0);
            getAccessToken(jsonCredentials, callbackContext);
            return true;
        }
        return false;
    }

    private void getAccessToken(String jsonCredentials, CallbackContext callbackContext) {
        callbackContext.success("token teste");
        /*try {
            // Converte a string JSON para um InputStream
            InputStream serviceAccountStream = new ByteArrayInputStream(jsonCredentials.getBytes(StandardCharsets.UTF_8));

            // Autentica usando as credenciais fornecidas dinamicamente
            GoogleCredentials credentials = GoogleCredentials.fromStream(serviceAccountStream)
                .createScoped(Collections.singletonList("https://www.googleapis.com/auth/cloud-platform"));

            credentials.refreshIfExpired();
            String token = credentials.getAccessToken().getTokenValue();

            // Retorna o token para o Cordova
            callbackContext.success(token);
        } catch (Exception e) {
            callbackContext.error("Erro ao obter o Access Token: " + e.getMessage());
        }*/
    }
}
