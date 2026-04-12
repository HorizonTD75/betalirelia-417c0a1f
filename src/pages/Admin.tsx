import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, LogOut, Database, RefreshCw } from "lucide-react";

type TableName = "contact_lirelia" | "cookie_consents";

const TABLES: { name: TableName; label: string }[] = [
  { name: "contact_lirelia", label: "Contacts LirElia" },
  { name: "cookie_consents", label: "Consentements cookies" },
];

const Admin = () => {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [selectedTable, setSelectedTable] = useState<TableName>("contact_lirelia");
  const [rows, setRows] = useState<any[]>([]);
  const [tableLoading, setTableLoading] = useState(false);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) fetchTable(selectedTable);
  }, [session, selectedTable]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });
    if (error) setLoginError(error.message);
    setLoginLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const fetchTable = async (table: TableName) => {
    setTableLoading(true);
    const { data, error } = await supabase
      .from(table)
      .select("*")
      .order("id", { ascending: false })
      .limit(200);
    if (error) {
      console.error("Fetch error:", error);
      setRows([]);
    } else {
      setRows(data || []);
    }
    setTableLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Database className="w-10 h-10 mx-auto text-primary mb-2" />
            <CardTitle className="text-2xl">Administration LirElia</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
                className="h-12 text-lg"
              />
              <Input
                type="password"
                placeholder="Mot de passe"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                className="h-12 text-lg"
              />
              {loginError && <p className="text-sm text-destructive">{loginError}</p>}
              <Button type="submit" className="w-full h-12 text-lg" disabled={loginLoading}>
                {loginLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Se connecter"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const columns = rows.length > 0 ? Object.keys(rows[0]) : [];

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Database className="w-5 h-5" /> Administration LirElia
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-sm opacity-80">{session.user?.email}</span>
          <Button variant="secondary" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-1" /> Déconnexion
          </Button>
        </div>
      </header>

      <div className="p-4 md:p-6">
        <div className="flex flex-wrap gap-2 mb-6">
          {TABLES.map((t) => (
            <Button
              key={t.name}
              variant={selectedTable === t.name ? "default" : "outline"}
              onClick={() => setSelectedTable(t.name)}
            >
              {t.label}
            </Button>
          ))}
          <Button variant="ghost" size="icon" onClick={() => fetchTable(selectedTable)}>
            <RefreshCw className={`w-4 h-4 ${tableLoading ? "animate-spin" : ""}`} />
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">
              {TABLES.find((t) => t.name === selectedTable)?.label} ({rows.length} enregistrements)
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            {tableLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            ) : rows.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">Aucun enregistrement trouvé.</p>
            ) : (
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    {columns.map((col) => (
                      <th key={col} className="text-left p-2 font-semibold whitespace-nowrap">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className="border-b hover:bg-muted/30">
                      {columns.map((col) => (
                        <td key={col} className="p-2 max-w-[300px] truncate" title={String(row[col] ?? "")}>
                          {row[col] === null ? (
                            <span className="text-muted-foreground italic">null</span>
                          ) : typeof row[col] === "object" ? (
                            <code className="text-xs bg-muted px-1 py-0.5 rounded">
                              {JSON.stringify(row[col]).slice(0, 80)}
                            </code>
                          ) : (
                            String(row[col])
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
