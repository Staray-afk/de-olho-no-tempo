
import fundosite from './fundosite.jpg';

function Home() {
    return (
        <main className="base">

            <img src={fundosite} alt="Imagem de clima" />

            <div className="caixa-login">

                <h2>Seja bem-vindo!</h2>

                <form id="formLogin" autoComplete="off">

                    <div className="grupo-input">
                        <label htmlFor="email">E-mail</label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Digite seu Email"
                            required
                        />

                        <span className="mensagem-erro" id="erro-email"></span>
                    </div>

                    <div className="grupo-input">
                        <label htmlFor="senha">Senha</label>

                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            required
                            autoComplete="current-password"
                        />

                        <span className="mensagem-erro" id="erro-senha"></span>

                        <p className="Esqueceu">
                            Esqueceu a senha?
                            <a href="esqueceu.html" className="Link-Esqueceu">
                                Clique aqui.
                            </a>
                        </p>

                        <button type="submit" id="btnAcessar">
                            Acessar
                        </button>
                    </div>
                </form>

                <div className="divisor">
                    <span className="Separador">Login Social</span>
                </div>

                <div className="login-social">

                    <a href="#" className="botao-social" title="Entrar com Google">
                        <img src="/Imagens/google-color-svgrepo-com.svg" alt="Google" />
                    </a>

                    <a href="#" className="botao-social" title="Entrar com Facebook">
                        <img src="/Imagens/facebook-color-svgrepo-com.svg" alt="Facebook" />
                    </a>

                    <a href="#" className="botao-social" title="Entrar com Instagram">
                        <img src="/Imagens/instagram-1-svgrepo-com.svg" alt="Instagram" />
                    </a>

                </div>

                <p>
                    Não tem uma conta?
                    <a href="cadastro.html" className="Link-destaque">
                        Cadastre-se.
                    </a>
                </p>

            </div>
        </main>
    );
}

export default Home;
