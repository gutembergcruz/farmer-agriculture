// Importar o jest-dom para estender as funcionalidades do expect
import '@testing-library/jest-dom';

// Configurações globais opcionais, se necessário
// Por exemplo, mockar alguma API global que você usa nos componentes
// beforeAll(() => {
//   // Exemplo: mockar window.matchMedia
//   Object.defineProperty(window, 'matchMedia', {
//     writable: true,
//     value: vi.fn().mockImplementation(query => ({
//       matches: false,
//       media: query,
//       onchange: null,
//       addEventListener: vi.fn(),
//       removeEventListener: vi.fn(),
//       dispatchEvent: vi.fn(),
//     })),
//   });
// });

// afterEach(() => {
//   // Limpar mocks após cada teste
//   vi.restoreAllMocks();
// });