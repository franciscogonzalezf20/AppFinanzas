# AppFinanzas
una aplicacion que ayuda a las empresas de finanzas, para la materia de temas selectos de ingenieria II

# GitFlow
** buenas practicas **

**Guía de Git Flow y Buenas Prácticas para Proyectos con Múltiples Desarrolladores**

---

### 1. Flujo de trabajo principal (Git Flow)

1. **Rama principal (`main` o `master`)**
   - Contiene el código estable y listo para producción.
   - Nada se desarrolla directamente aquí.

2. **Rama de desarrollo (`develop`)**
   - Punto central donde se integran nuevas funcionalidades.
   - Solo se hace merge de ramas funcionales cuando estén validadas.

3. **Ramas de funcionalidades (`feature/`)**
   - Cada desarrollador crea una rama a partir de `develop`.
   - Nombre sugerido: `feature/nombre-descriptivo`.
   - Se prueba y se hace pull request a `develop`.

4. **Ramas de corrección de errores (`hotfix/`)**
   - Derivan directamente de `main`.
   - Para errores críticos en producción.
   - Se hace merge tanto a `main` como a `develop`.

5. **Ramas de preparación de versiones (`release/`)**
   - Se usan para test final, documentación y detalles antes de producción.
   - Se hacen desde `develop` y se fusionan en `main` y `develop`.

---

### 2. Buenas prácticas

#### a) Antes de modificar el código
- Hacer `git pull origin develop` para obtener la última versión.
- Crear rama propia si se hará una nueva funcionalidad.

#### b) Al trabajar en una funcionalidad
- Commits frecuentes y significativos.
- Mensajes de commit claros: `feat: agregar login`, `fix: corregir bug en registro`, etc.
- Evitar subir código sin probar.

#### c) Al terminar una tarea
- Probar localmente antes de subir.
- Hacer `push` de tu rama al repositorio.
- Crear un **Pull Request (PR)** a la rama `develop`.
- Solicitar revisión de código (Code Review).

#### d) Resolución de conflictos
- Si hay conflictos al hacer merge, resolver manualmente.
- Probar de nuevo antes de subir los cambios.

#### e) Validación continua
- Idealmente usar integración continua (CI) para ejecutar pruebas automáticas en cada PR.

---

### 3. Roles y responsabilidades

- **Líder técnico o PM**: aprueba PRs y valida integración a `develop` y `main`.
- **Desarrolladores**: trabajan siempre en ramas individuales, no modifican `main` ni `develop` directamente.
- **Tester (QA)**: valida en ramas `release` o `develop`, según etapa del proyecto.

---

### 4. Nombres recomendados para ramas
- `feature/login-usuario`
- `feature/crear-reporte-pdf`
- `hotfix/cierre-sesion`
- `release/v1.0.0`

---

